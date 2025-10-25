import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/context/AuthContext';
import s from './Profile.module.css';
import { FaUser, FaEnvelope, FaCalendar } from 'react-icons/fa';

export function Profile() {
    const { user, logout, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!displayName) return;

        try {
            await updateUserProfile(displayName, photoURL);
            setIsEditing(false);
        } catch (error) {
            console.error('Profile update error:', error);
        }
    };

    if (!user) {
        navigate('/auth');
        return null;
    }

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.header}>
                    <div className={s.avatarContainer}>
                        <img
                            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`}
                            alt={user.displayName || 'User'}
                            className={s.avatar}
                        />
                    </div>
                    <h1 className={s.title}>{user.displayName || 'Anonymous User'}</h1>
                    <p className={s.email}>{user.email}</p>
                </div>

                <div className={s.content}>
                    <div className={s.infoGrid}>
                        <div className={s.infoItem}>
                            <div className="flex items-center gap-2 mb-2">
                                <FaUser className="text-blue-600" />
                                <p className={s.label}>Display Name</p>
                            </div>
                            <p className={s.value}>{user.displayName || 'Not set'}</p>
                        </div>

                        <div className={s.infoItem}>
                            <div className="flex items-center gap-2 mb-2">
                                <FaEnvelope className="text-blue-600" />
                                <p className={s.label}>Email Address</p>
                            </div>
                            <p className={s.value}>{user.email}</p>
                        </div>

                        <div className={s.infoItem}>
                            <div className="flex items-center gap-2 mb-2">
                                <FaCalendar className="text-blue-600" />
                                <p className={s.label}>Account Created</p>
                            </div>
                            <p className={s.value}>
                                {user.metadata.creationTime
                                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                                    : 'Unknown'}
                            </p>
                        </div>
                    </div>

                    <div className={s.buttonContainer}>
                        <button
                            onClick={() => setIsEditing(true)}
                            className={s.button}
                        >
                            Update Profile
                        </button>
                        <button
                            onClick={handleLogout}
                            className={s.logoutButton}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Update Profile Modal */}
            {isEditing && (
                <div className={s.modal} onClick={() => setIsEditing(false)}>
                    <div className={s.modalCard} onClick={(e) => e.stopPropagation()}>
                        <h2 className={s.modalTitle}>Update Profile</h2>

                        <form onSubmit={handleUpdateProfile} className={s.form}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Display Name
                                </label>
                                <input
                                    type="text"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    className={s.input}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className={s.input}
                                    placeholder="Enter photo URL"
                                />
                            </div>

                            <div className={s.modalButtons}>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className={s.cancelButton}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className={s.saveButton}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
