import { useContext } from 'react';
import './auth.module.css';
import s from './auth.module.css';
import { PhotoIcon } from '@/shared/assets/icons';
import * as validate from './Auth.validation';
import { AuthLocalContext } from './Auth';

export function PhotoURL() {
    const { form, handleInputChange, handleBlur, touched } = useContext(AuthLocalContext)!;

    return (
        <div>
            <label className={s.label} htmlFor="photoURL">Photo URL</label>
            <div className={s.inputGroup}>
                <PhotoIcon className={s.icon} />
                <input
                    id="photoURL"
                    name="photoURL"
                    type="url"
                    value={form.photoURL}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={s.input}
                    placeholder="Enter your photo URL"
                />
            </div>
            {touched.photoURL && validate.photoURL && <p>{validate.photoURL(form.photoURL)}</p>}
        </div>
    );
};
