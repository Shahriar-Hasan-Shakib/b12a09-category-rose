import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useAuth } from '@/context/AuthContext';
import s from './ForgotPassword.module.css';

export function ForgotPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const { resetPassword } = useAuth();

    // Pre-fill email if provided from login page
    const [email, setEmail] = useState(location.state?.email || '');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) { return; }

        setIsSubmitting(true);
        try {
            await resetPassword(email);
            setTimeout(() => {
                window.open('https://mail.google.com', '_blank');
                navigate('/auth');
            }, 1500);
        } catch (error) {
            console.error('Password reset error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={s.container}>
            <div className={s.card}>
                <h1 className={s.title}>Forgot Password?</h1>
                <p className={s.subtitle}>
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit} className={s.form}>
                    <div>
                        <label htmlFor="email" className={s.label}>Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={s.input}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={s.button}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                <div className="mt-6">
                    <Link to="/auth" className={s.backLink}>← Back to Login</Link>
                </div>
            </div>
        </div>
    );
}
