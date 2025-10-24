import { useContext } from "react";
import { AuthLocalContext } from "./Auth";
import s from './auth.module.css';
export function Header() {
    const { isLogin } = useContext(AuthLocalContext)!;
    return (
        <div className={s.header}>
            <h1 className={s.headerTitle}>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p className={s.headerText}>{isLogin ? 'Sign in to continue your journey' : 'Join us and unlock amazing features'}</p>
        </div>
    );
}