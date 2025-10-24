import { Link } from 'react-router';
import { FaBullseye, FaEye } from 'react-icons/fa';
import s from './About.module.css';
import { SERVICES } from '@/constant/routes';

export const About = () => {
    const stats = [
        { number: '10K+', label: 'Happy Pets' },
        { number: '500+', label: 'Expert Vets' },
        { number: '15+', label: 'Years Experience' },
        { number: '98%', label: 'Satisfaction Rate' }
    ];

    const values = [
        {
            icon: '🐾',
            title: 'Pet-First Approach',
            description: 'Every decision we make prioritizes the health, safety, and happiness of your beloved pets.'
        },
        {
            icon: '💙',
            title: 'Compassionate Care',
            description: 'We treat every pet with the love and respect they deserve, as if they were our own family.'
        },
        {
            icon: '⭐',
            title: 'Excellence in Service',
            description: 'Our team of certified professionals delivers the highest quality veterinary care and services.'
        }
    ];

    const team = [
        {
            name: 'Dr. Sarah Williams',
            role: 'Chief Veterinarian',
            image: 'https://i.imgur.com/MDF80Kl.png',
            bio: 'Specialized in winter pet care with 15+ years of experience. Expert in cold-weather health management.'
        },
        {
            name: 'Dr. Michael Chen',
            role: 'Pet Nutritionist',
            image: 'https://i.imgur.com/xkmhnwb.jpeg',
            bio: 'Focuses on optimal nutrition plans for pets during winter months. Certified animal nutritionist.'
        },
        {
            name: 'Dr. Emily Rodriguez',
            role: 'Grooming Specialist',
            image: 'https://i.imgur.com/cKmR4LO.jpeg',
            bio: 'Expert in winter grooming techniques and paw care. Over 10 years of professional grooming experience.'
        }
    ];

    return (
        <div className={s.container}>
            {/* Hero Section */}
            <section className={s.hero}>
                <div className={s.heroContent}>
                    <h1 className={s.heroTitle}>About Winter Pet Care</h1>
                    <p className={s.heroSubtitle}>
                        Dedicated to providing exceptional veterinary care and support for your furry friends during the winter season and beyond.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className={s.story}>
                <div className={s.storyContent}>
                    <div>
                        <img
                            src="https://i.imgur.com/Cq9GhWn.png"
                            alt="Our Veterinary Clinic"
                            className={s.storyImage}
                        />
                    </div>
                    <div className={s.storyText}>
                        <h2 className={s.sectionTitle}>Our Story</h2>
                        <p className={s.paragraph}>
                            Founded in 2010, Winter Pet Care began with a simple mission: to ensure that every pet receives the specialized care they need during the challenging winter months.
                        </p>
                        <p className={s.paragraph}>
                            What started as a small clinic has grown into a comprehensive pet care facility, serving thousands of pets and their families. Our team of dedicated veterinarians and staff work tirelessly to provide the best possible care.
                        </p>
                        <p className={s.paragraph}>
                            Today, we're proud to be recognized as one of the leading winter pet care providers, offering everything from routine checkups to specialized cold-weather treatments and emergency services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={s.missionVision}>
                <div className={s.missionVisionContent}>
                    <h2 className={s.sectionTitleCentered}>Mission & Vision</h2>
                    <div className={s.mvGrid}>
                        <div className={s.mvCard}>
                            <FaBullseye className={s.mvIcon} />
                            <h3 className={s.mvTitle}>Our Mission</h3>
                            <p className={s.mvText}>
                                To provide exceptional, compassionate veterinary care that enhances the lives of pets and their families. We strive to be the trusted partner in your pet's health journey, especially during the winter season when they need us most.
                            </p>
                        </div>
                        <div className={s.mvCard}>
                            <FaEye className={s.mvIcon} />
                            <h3 className={s.mvTitle}>Our Vision</h3>
                            <p className={s.mvText}>
                                To be the premier destination for winter pet care, setting the standard for excellence in veterinary medicine. We envision a world where every pet receives the specialized seasonal care they deserve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={s.stats}>
                <div className={s.statsContent}>
                    <div className={s.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={s.statCard}>
                                <div className={s.statNumber}>{stat.number}</div>
                                <div className={s.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={s.values}>
                <div className={s.valuesContent}>
                    <h2 className={s.sectionTitleCentered}>Our Core Values</h2>
                    <div className={s.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={s.valueCard}>
                                <div className={s.valueIcon}>{value.icon}</div>
                                <h3 className={s.valueTitle}>{value.title}</h3>
                                <p className={s.valueText}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={s.team}>
                <div className={s.teamContent}>
                    <h2 className={s.sectionTitleCentered}>Meet Our Expert Team</h2>
                    <div className={s.teamGrid}>
                        {team.map((member, index) => (
                            <div key={index} className={s.teamCard}>
                                <img src={member.image} alt={member.name} className={s.teamImage} />
                                <div className={s.teamInfo}>
                                    <h3 className={s.teamName}>{member.name}</h3>
                                    <p className={s.teamRole}>{member.role}</p>
                                    <p className={s.teamBio}>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={s.cta}>
                <div className={s.ctaContent}>
                    <h2 className={s.ctaTitle}>Ready to Give Your Pet the Best Care?</h2>
                    <p className={s.ctaText}>
                        Explore our comprehensive winter pet care services designed for your furry friend's well-being.
                    </p>
                    <Link to={SERVICES} className={s.ctaButton}>
                        View Our Services
                    </Link>
                </div>
            </section>
        </div>
    );
};