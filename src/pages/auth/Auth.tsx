import { createContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '@/context/AuthContext';
import { provider } from './auth.provider';
import s from './auth.module.css';
import { Header } from './form.Header';
import { Name } from './form.Name';
import { RememberMe } from './form.RememberMe';
import { Password } from './form.Password';
import { Email } from './form.Email';
import { PhotoURL } from './form.PhotoURL';
import { Submit } from './form.Submit';
import { Footer } from './form.Footer';
import toast from 'react-hot-toast';

type FormData = {
    name: string;
    email: string;
    password: string;
    photoURL: string;
};

type TouchedFields = {
    name: boolean;
    email: boolean;
    password: boolean;
    photoURL: boolean;
};

interface AuthContextType {
    isLogin: boolean;
    $IsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    form: FormData;
    $form: React.Dispatch<React.SetStateAction<FormData>>;
    touched: TouchedFields;
    $touched: React.Dispatch<React.SetStateAction<TouchedFields>>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    handleSocialLogin: (providerType: string) => Promise<void>;
}
export const AuthLocalContext = createContext<AuthContextType | undefined>(undefined);

// Simple password validation according to requirements
const validatePassword = (password: string): string => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter';
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
    return '';
};

export function Auth() {
    const [isLogin, $IsLogin] = useState(true);
    const [form, $form] = useState({ name: '', email: '', password: '', photoURL: '' });
    const [touched, $touched] = useState({ name: false, email: false, password: false, photoURL: false });

    const { signIn, signUp } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        $form({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        $touched({ ...touched, [e.target.name]: true });
    };

    const handleSocialLogin = async (providerType: string) => {
        try {
            await provider(providerType);
            toast.success('Successfully logged in!');
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Social login error:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate password
        const passwordError = validatePassword(form.password);
        if (passwordError) {
            toast.error(passwordError);
            return;
        }

        try {
            if (isLogin) {
                await signIn(form.email, form.password);
                navigate(from, { replace: true });
            } else {
                if (!form.name) {
                    toast.error('Name is required');
                    return;
                }
                await signUp(form.email, form.password, form.name, form.photoURL);
                navigate(from, { replace: true });
            }
        } catch (error) {
            console.error('Auth error:', error);
        }
    };

    const value = {
        isLogin, $IsLogin,
        form, $form,
        touched, $touched,
        handleInputChange,
        handleBlur,
        handleSocialLogin,
    };

    return (
        <AuthLocalContext.Provider value={value}>
            <div className={s.container}>
                <div className={s.card}>

                    <Header />

                    <form onSubmit={handleSubmit} className={s.form}>
                        {!isLogin && <Name />}
                        <Email />
                        {!isLogin && <PhotoURL />}
                        <Password />
                        {isLogin && <RememberMe />}
                        <Submit />

                    </form>

                    <Footer />
                </div>
            </div>
        </AuthLocalContext.Provider>
    );
}
