import { useContext } from 'react';
import s from './auth.module.css';
import { AuthLocalContext } from './Auth';

export function Submit() {
    const { isLogin, $touched } = useContext(AuthLocalContext)!
    const handleSubmit = () => {
        $touched({ name: true, email: true, password: true, photoURL: true });
    }
    return (
        <button type="submit" className={s.submitButton} onClick={handleSubmit}>
            {isLogin ? 'Sign In' : 'Create Account'}
        </button>
    )
}