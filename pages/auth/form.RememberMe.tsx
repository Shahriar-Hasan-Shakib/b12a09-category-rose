import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthLocalContext } from './Auth';
import s from './auth.module.css';
import { FORGOT_PASSWORD } from '@/shared/routes';

export function RememberMe() {
    const context = useContext(AuthLocalContext);
    if (!context) {
        throw new Error('RememberMe must be used within Auth');
    }
    const { form } = context;

    return (
        <div className="flex items-center justify-between">
            <label className="flex items-center">
                <input type="checkbox" className={s.checkbox} />
                <span className={s.checkboxLabel}>Remember me</span>
            </label>
            <Link
                to={FORGOT_PASSWORD}
                state={{ email: form.email }}
                className={s.linkButton}
            >
                Forgot password?
            </Link>
        </div>
    )
}