import { useContext } from "react";
import { AuthLocalContext } from "./Auth";
import s from './auth.module.css';
import { GoogleIcon, GitHubIcon, FacebookIcon, TwitterIcon } from '../../shared/assets/icons';
import '@/shared/style/button.css';

export function Footer() {
    const { isLogin, $IsLogin, $form, $touched, handleSocialLogin } = useContext(AuthLocalContext)!;
    const handleSwitch = () => {
        $form({ name: '', email: '', password: '', photoURL: '' });
        $touched({ name: false, email: false, password: false });
        $IsLogin(!isLogin);
    };


    return (
        <div>
            <h1 className={s.h1}>Continue with</h1>
            <div className={`${s.socialContainer} text-7xl`}>
                <button type="button" onClick={() => handleSocialLogin('google')} >   <GoogleIcon />   <span className="text-white">Google</span> </button>
                <button type="button" onClick={() => handleSocialLogin('github')} >   <GitHubIcon />   <span>GitHub</span> </button>
                <button type="button" onClick={() => handleSocialLogin('facebook')} > <FacebookIcon /> <span>Facebook</span> </button>
                <button type="button" onClick={() => handleSocialLogin('twitter')} >  <TwitterIcon />  <span>X</span> </button>
            </div>

            {/* Divider */}
            <div className={s.divider}></div>

            {/* Sign In/Up Toggle */}
            <div className={s.footerText}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button type="button" onClick={handleSwitch} className={s.footerButton}>
                    {isLogin ? 'Sign up' : 'Sign in'}
                </button>
            </div>
        </div>
    )
}