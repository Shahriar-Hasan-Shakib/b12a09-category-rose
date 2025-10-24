import { GitHubIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from '@/shared/assets/icons';
import { BLOG, CAREERS, PRIVACY, TERMS, FACEBOOK, TWITTER, GITHUB, LINKEDIN } from '@/constant/';

export const currentYear = new Date().getFullYear();


export const resourceLinks = [
    { name: 'Blog', path: BLOG },
    { name: 'Careers', path: CAREERS },
    { name: 'Privacy Policy', path: PRIVACY },
    { name: 'Terms of Service', path: TERMS },
];

export const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, url: FACEBOOK, color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: TwitterIcon, url: TWITTER, color: 'hover:text-sky-400' },
    { name: 'GitHub', icon: GitHubIcon, url: GITHUB, color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: LINKEDIN, color: 'hover:text-blue-600' },
];
