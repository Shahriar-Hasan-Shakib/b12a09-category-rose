import s from './ExpertVets.module.css';

const vets = [
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

export function ExpertVets() {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.header}>
                    <h2 className={s.title}>Meet Our Expert Vets</h2>
                    <p className={s.subtitle}>
                        Trusted professionals dedicated to your pet's winter wellness
                    </p>
                </div>

                <div className={s.grid}>
                    {vets.map((vet, index) => (
                        <div key={index} className={s.card}>
                            <div className={s.imageContainer}>
                                <img src={vet.image} alt={vet.name} className={s.image} />
                            </div>
                            <div className={s.content}>
                                <h3 className={s.name}>{vet.name}</h3>
                                <p className={s.role}>{vet.role}</p>
                                <p className={s.bio}>{vet.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
