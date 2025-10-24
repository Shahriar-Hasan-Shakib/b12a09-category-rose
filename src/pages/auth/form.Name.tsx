import { useContext } from 'react';
import './auth.module.css';
import styles from './auth.module.css';
import { UserIcon } from '@/shared/assets/icons';
import * as validate from './Auth.validation';
import { AuthLocalContext } from './Auth';

export function Name() {
    const { form, handleInputChange, isLogin, handleBlur, touched } = useContext(AuthLocalContext)!;

    return (
        <div>
            <label className={styles.label} htmlFor="name">Full Name</label>
            <div className={styles.inputGroup}>
                <UserIcon className={styles.icon} />
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={styles.input}
                    placeholder="Enter your full name"
                    required={!isLogin}
                />
            </div>
            {touched.name && <p>{validate.name(form.name)}</p>}
        </div>
    );
};