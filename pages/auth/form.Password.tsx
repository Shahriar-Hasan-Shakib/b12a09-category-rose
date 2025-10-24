import { useContext, useState } from 'react';
import './auth.module.css';
import s from './auth.module.css';
import { EyeIcon, EyeSlashIcon, LockIcon } from '@/shared/assets/icons';
import * as validate from './Auth.validation';
import { AuthLocalContext } from './Auth';

export function Password() {
    const [showPassword, $ShowPassword] = useState(false);
    const { form, handleInputChange, handleBlur, touched } = useContext(AuthLocalContext)!;
    return (
        <div>
            <label className={s.label} htmlFor="password">Password</label>
            <div className={s.inputGroup}>
                <LockIcon className={s.icon} />
                <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={s.input}
                    placeholder="Enter your password"
                    required
                />
                <button type="button" onClick={() => $ShowPassword(!showPassword)} className={s.passwordButton}>
                    {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
            </div>
            {touched.password && <p>{validate.password(form.password)}</p>}
        </div>
    )
}