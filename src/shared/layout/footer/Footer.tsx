import { Link } from 'react-router';
import styles from './Footer.module.css';
import { currentYear, resourceLinks, socialLinks } from './Footer.data';
import { navigationLinks } from '../header/Header.data';

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Main Footer Grid */}
                <div className={styles.grid}>

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className={styles.brand}>
                            <h2 className={styles.brandTitle}>WarmPaws</h2>
                        </Link>
                        <p className={styles.brandText}>
                            Your trusted companion for pet care in winter. Keeping your furry friends warm, safe, and healthy.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm">📧 contact@warmpaws.com</p>
                            <p className="text-gray-400 text-sm">📞 +1 (555) 123-4567</p>
                            <p className="text-gray-400 text-sm">📍 123 Pet Street, Winterville, WV 12345</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className={styles.columnTitle}>Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            {navigationLinks.map(link => (
                                <Link key={link.path} to={link.path} className={styles.link}>
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Resources Column */}
                    <div className="space-y-4">
                        <h3 className={styles.columnTitle}>Legal</h3>
                        <nav className="flex flex-col space-y-2">
                            {resourceLinks.map(link => (
                                <Link key={link.path} to={link.path} className={styles.link}>
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/privacy-policy" className={styles.link}>
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className={styles.link}>
                                Terms of Service
                            </Link>
                        </nav>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4 ">
                        <h3 className={styles.columnTitle}>Connect With Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(social => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.socialIcon} ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="w-6 h-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Copyright */}
                <p className={styles.copy}>
                    &copy; {currentYear} WarmPaws. All rights reserved. Made with ❤️ for pets.
                </p>
            </div>
        </footer>
    );
};
