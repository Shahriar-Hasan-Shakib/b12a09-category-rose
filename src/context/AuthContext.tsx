import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    sendPasswordResetEmail,
    type User
} from 'firebase/auth';
import { auth } from '@/pages/auth/auth.firebase';
import toast from 'react-hot-toast';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signUp: (email: string, password: string, name: string, photoURL?: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    updateUserProfile: (displayName: string, photoURL: string) => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signUp = async (email: string, password: string, name: string, photoURL: string = '') => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
            });
            toast.success('Account created successfully!');
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to create account';
            toast.error(errorMessage);
            throw error;
        }
    };

    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Welcome back!');
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to sign in';
            toast.error(errorMessage);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            toast.success('Logged out successfully');
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to logout';
            toast.error(errorMessage);
            throw error;
        }
    };

    const updateUserProfile = async (displayName: string, photoURL: string) => {
        if (auth.currentUser) {
            try {
                await updateProfile(auth.currentUser, { displayName, photoURL });
                setUser({ ...auth.currentUser });
                toast.success('Profile updated successfully!');
            } catch (error: unknown) {
                const errorMessage = error instanceof Error ? error.message : 'Failed to update profile';
                toast.error(errorMessage);
                throw error;
            }
        }
    };

    const resetPassword = async (email: string) => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent!');
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to send reset email';
            toast.error(errorMessage);
            throw error;
        }
    };

    const value = {
        user,
        loading,
        signUp,
        signIn,
        logout,
        updateUserProfile,
        resetPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}
