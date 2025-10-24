import type { InputProps } from './Input.types';
import s from './Input.module.css';

export function Input({
    label,
    error,
    helperText,
    containerClassName = '',
    className = '',
    ...props
}: InputProps) {
    return (
        <div className={`${s.container} ${containerClassName}`}>
            {label && <label className={s.label}>{label}</label>}
            <input
                className={`${s.input} ${error ? s.error : ''} ${className}`}
                {...props}
            />
            {error && <p className={s.errorText}>{error}</p>}
            {!error && helperText && <p className={s.helperText}>{helperText}</p>}
        </div>
    );
}
