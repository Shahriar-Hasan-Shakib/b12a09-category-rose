import type { ServiceCardProps } from './ServiceCard.types';
import s from './ServiceCard.module.css';
import { MapMarkerAltIcon, StarIcon } from '@/shared/assets/icons';

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
    const { serviceId, serviceName, providerName, price, rating, slotsAvailable, description, image, category } = service;

    return (
        <div className={s.card}>
            <div className={s.imageContainer}>
                <img src={image} alt={serviceName} className={s.image} loading="lazy" />
                <span className={s.badge}>{category}</span>
            </div>

            <div className={s.content}>
                <h3 className={s.title}>{serviceName}</h3>

                <div className={s.provider}>
                    <MapMarkerAltIcon className="text-gray-400" />
                    <span>{providerName}</span>
                </div>

                <p className={s.description}>{description}</p>

                <div className={s.footer}>
                    <div>
                        <div className={s.rating}>
                            <StarIcon /><span>{rating.toFixed(1)}</span>
                        </div>
                        <p className={s.slots}>{slotsAvailable} slots left</p>
                    </div>

                    <div className="text-right">
                        <p className={s.price}>${price}</p>
                        <p className="text-xs text-gray-500">per session</p>
                    </div>
                </div>

                <button
                    className={s.button}
                    onClick={() => onViewDetails?.(serviceId)}
                >
                    View Details
                </button>
            </div>
        </div>
    );
}
