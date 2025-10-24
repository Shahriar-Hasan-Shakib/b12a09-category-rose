import { HeartIcon, PawIcon, ShieldAltIcon, SnowflakeIcon } from '@/shared/assets/icons';
import s from './WinterTips.module.css';

const tips = [
    {
        icon: <SnowflakeIcon />,
        title: 'Dress Warmly',
        description: 'Use sweaters or coats for short-haired breeds and smaller pets to protect them from cold.'
    },
    {
        icon: <PawIcon />,
        title: 'Protect Paws',
        description: 'Apply paw balm and use booties to prevent ice, salt, and chemical burns on sensitive pads.'
    },
    {
        icon: <HeartIcon />,
        title: 'Indoor Exercise',
        description: 'Keep your pets active indoors with games and activities when it\'s too cold outside.'
    },
    {
        icon: <ShieldAltIcon />,
        title: 'Health Checks',
        description: 'Regular vet visits ensure your pet stays healthy and prepared for winter challenges.'
    }
];

export function WinterTips() {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.header}>
                    <h2 className={s.title}>Winter Care Tips</h2>
                    <p className={s.subtitle}>
                        Essential advice to keep your pets safe and comfortable during cold weather
                    </p>
                </div>

                <div className={s.grid}>
                    {tips.map((tip, index) => (
                        <div key={index} className={s.card}>
                            <div className={s.iconContainer}>{tip.icon}</div>
                            <h3 className={s.cardTitle}>{tip.title}</h3>
                            <p className={s.cardText}>{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
