import { useState, useEffect, use } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { useAuth } from '@/context/AuthContext';
import type { Service } from '@/shared/components/serviceCard/ServiceCard.types';
import s from './ServiceDetails.module.css';
import toast from 'react-hot-toast';
import { SERVICES, SERVICES_JSON } from '@/constant';
import { ArrowLeftIcon, DollarIcon, MapMarkerAltIcon, StarIcon, UsersIcon } from '@/shared/assets/icons';

export function ServiceDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [service, setService] = useState<Service | null>(null);
    const [bookingData, setBookingData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
    });
        
    useEffect(() => {
        // Load service data
        fetch(SERVICES_JSON)
            .then(res => res.json())
            .then((data: Service[]) => {
                const foundService = data.find(s => s.serviceId === Number(id));
                if (foundService) {
                    setService(foundService);
                } else {
                    navigate(SERVICES);
                }
            })
            .catch(error => {
                console.error('Error loading service:', error);
                navigate(SERVICES);
            });
    }, [id, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!bookingData.name || !bookingData.email) {
            toast.error('Please fill in all fields');
            return;
        }

        toast.success(`Booking confirmed for ${service?.serviceName}!`);
        setBookingData({ name: user?.displayName || '', email: user?.email || '' });
    };

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className={s.container}>
            <div className={s.content}>
                <Link to={SERVICES} className={s.backButton}><ArrowLeftIcon /> Back to Services</Link>

                <div className={s.grid}>
                    <div className={s.imageSection}>
                        <img src={service.image} alt={service.serviceName} className={s.image} />
                    </div>

                    <div className={s.detailsSection}>
                        <span className={s.badge}>{service.category}</span>
                        <h1 className={s.title}>{service.serviceName}</h1>

                        <div className={s.provider}>
                            <MapMarkerAltIcon className="text-gray-400" />
                            <span>{service.providerName}</span>
                        </div>

                        <div className={s.statsGrid}>
                            <div className={s.statCard}>
                                <p className={s.statLabel}>Rating</p>
                                <div className="flex items-center justify-center gap-1">
                                    <StarIcon className="text-yellow-500" />
                                    <p className={s.statValue}>{service.rating}</p>
                                </div>
                            </div>

                            <div className={s.statCard}>
                                <p className={s.statLabel}>Price</p>
                                <div className="flex items-center justify-center gap-1">
                                    <DollarIcon className="text-green-500" />
                                    <p className={s.statValue}>{service.price}</p>
                                </div>
                            </div>

                            <div className={s.statCard}>
                                <p className={s.statLabel}>Slots Left</p>
                                <div className="flex items-center justify-center gap-1">
                                    <UsersIcon className="text-blue-500" />
                                    <p className={s.statValue}>{service.slotsAvailable}</p>
                                </div>
                            </div>
                        </div>

                        <div className={s.description}><p>{service.description}</p></div>

                        <div className="text-sm text-gray-600">
                            <p><strong>Provider Email:</strong> {service.providerEmail}</p>
                        </div>
                    </div>
                </div>

                {/* Booking Form */}
                <div className={s.bookingSection}>
                    <h2 className={s.bookingTitle}>Book This Service</h2>

                    <form onSubmit={handleSubmit} className={s.form}>
                        <div>
                            <label className={s.label}>Your Name</label>
                            <input
                                type="text"
                                value={bookingData.name}
                                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                                className={s.input}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className={s.label}>Your Email</label>
                            <input
                                type="email"
                                value={bookingData.email}
                                onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                                className={s.input}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <button type="submit" className={s.submitButton}>Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
