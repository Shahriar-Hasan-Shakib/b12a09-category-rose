import { useContext } from 'react';
import './auth.module.css';
import s from './auth.module.css';
import { MailIcon } from '@/shared/assets/icons';
import * as validate from './Auth.validation';
import { AuthLocalContext } from './Auth';

export function Email() {
    const { form, handleInputChange, handleBlur, touched } = useContext(AuthLocalContext)!;

    return (
        <div>
            <label className={s.label} htmlFor="email">Email Address</label>
            <div className={s.inputGroup}>
                <MailIcon className={s.icon} />
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={s.input}
                    placeholder="Enter your email"
                    required
                />
            </div>
            {touched.email && <p>{validate.email(form.email)}</p>}
        </div>
    );
};