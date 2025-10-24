import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { useAuth } from '@/context/AuthContext';
import s from './Header.module.css';
import { ExitIcon, MenuIcon } from '@/shared/assets/icons';
import { navigationLinks } from './Header.data';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const { user, logout } = useAuth();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) =>
            headerRef.current && !headerRef.current.contains(e.target as Node) && setIsMenuOpen(false);

        isMenuOpen && document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const handleLogout = async () => {
        await logout();
        setShowUserMenu(false);
    };

    return (
        <header className={s.header} ref={headerRef}>
            <div className={s.container}>
                <NavLink className={s.logo} to={"/"}>
                    <h1>WarmPaws</h1>
                </NavLink>

                <nav className={`${s.nav} ${isMenuOpen ? s.navOpen : ''}`}>
                    {navigationLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            onClick={toggleMenu}
                            to={link.path}
                            className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {user ? (
                        <>
                            <NavLink
                                onClick={toggleMenu}
                                to="/profile"
                                className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''} -order-1`}
                            >
                                Profile
                            </NavLink>
                            <div className={`${s.userMenu} -order-2`}>
                                <button
                                    className={s.avatar}
                                    onMouseEnter={() => setShowUserMenu(true)}
                                    onMouseLeave={() => setShowUserMenu(false)}
                                >
                                    <img
                                        src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`}
                                        alt={user.displayName || 'User'}
                                    />
                                    <span className='text-black'>{user.displayName}</span>
                                    {showUserMenu && (
                                        <div className={s.userMenuDropdown}>
                                            <p className={s.userName}>{user.displayName}</p>
                                        </div>
                                    )}
                                </button>
                            </div>
                            <button onClick={handleLogout} className={s.navBtn}>Logout</button>
                        </>
                    ) : (
                        <NavLink
                            onClick={toggleMenu}
                            to="/auth"
                            className={({ isActive }) => `${s.navBtn} ${isActive ? s.active : ''}`}
                        >
                            Login
                        </NavLink>
                    )}
                </nav>

                <button className={s.menuBtn} onClick={toggleMenu} aria-label='Toggle Menu'>
                    {isMenuOpen ? <ExitIcon /> : <MenuIcon />}
                </button>
            </div>
        </header>
    );
};
