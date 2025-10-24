import { HOME, ABOUT, SERVICES, CONTACT, AUTH } from '@/constant/routes';

export const navigationLinks = [
    { name: 'Home', path: HOME },
    { name: 'About', path: ABOUT },
    { name: 'Services', path: SERVICES },
    { name: 'Contact', path: CONTACT },
];

export const authLink = {
    name: 'Login',
    path: AUTH,
};
