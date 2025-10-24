import type { CardProps } from './Card.types';
import s from './Card.module.css';

export function Card({ children, className = '', variant = 'default', onClick }: CardProps) {
    return (
        <div
            className={`${s.card} ${s[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
