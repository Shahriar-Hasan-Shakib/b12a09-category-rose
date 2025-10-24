import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import styles from './Contact.module.css';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/shared/assets/icons';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        // Simulate form submission
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'info@winterpetcare.com',
            link: 'mailto:info@winterpetcare.com'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Address',
            value: '123 Pet Care Street, Winter City, WC 12345',
            link: null
        }
    ];

    const hours = [
        { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
        { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
        { day: 'Sunday', time: '10:00 AM - 4:00 PM' },
        { day: 'Holidays', time: 'By Appointment' }
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, url: 'https://facebook.com', name: 'Facebook' },
        { icon: <TwitterIcon />, url: 'https://twitter.com', name: 'Twitter' },
        { icon: <InstagramIcon />, url: 'https://instagram.com', name: 'Instagram' },
        { icon: <LinkedinIcon />, url: 'https://linkedin.com', name: 'LinkedIn' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Header */}
                <div className={styles.header}>
                    <h1 className={styles.title}>Get In Touch</h1>
                    <p className={styles.subtitle}>
                        Have questions about our services? We're here to help and would love to hear from you.
                    </p>
                </div>

                {/* Main Grid */}
                <div className={styles.grid}>
                    {/* Contact Form */}
                    <div className={styles.formCard}>
                        <h2 className={styles.formTitle}>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={styles.input}
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    rows={6}
                                    placeholder="Tell us about your pet care needs..."
                                    required
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                <FaPaperPlane />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.infoCard}>
                        {/* Contact Details */}
                        <div className={styles.infoSection}>
                            <h2 className={styles.infoTitle}>Contact Information</h2>
                            <div className={styles.infoList}>
                                {contactInfo.map((info, index) => (
                                    <div key={index} className={styles.infoItem}>
                                        <div className={styles.infoIcon}>{info.icon}</div>
                                        <div className={styles.infoContent}>
                                            <div className={styles.infoLabel}>{info.label}</div>
                                            {info.link ? (
                                                <a href={info.link} className={styles.infoLink}>
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className={styles.infoValue}>{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className={styles.hoursSection}>
                            <h2 className={styles.hoursTitle}>
                                <FaClock style={{ display: 'inline', marginRight: '8px' }} />
                                Business Hours
                            </h2>
                            <div className={styles.hoursList}>
                                {hours.map((hour, index) => (
                                    <div key={index} className={styles.hoursItem}>
                                        <span className={styles.day}>{hour.day}</span>
                                        <span className={styles.time}>{hour.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className={styles.socialSection}>
                            <h2 className={styles.socialTitle}>Follow Us</h2>
                            <p className={styles.socialText}>
                                Stay connected with us on social media for updates, tips, and pet care advice.
                            </p>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialLink}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className={styles.mapSection}>
                    <div className={styles.mapContainer}>
                        <iframe
                            title="Winter Pet Care Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784668459395!3d40.748817379328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};