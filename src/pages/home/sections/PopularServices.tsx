import { useState, useEffect } from 'react';
import { useNavigate, Link, useLoaderData, useParams } from 'react-router';
import { ServiceCard } from '@/shared/components/serviceCard/ServiceCard';
import type { Service } from '@/shared/components/serviceCard/ServiceCard.types';
import s from './PopularServices.module.css';
import { SERVICES } from '@/constant';


export function PopularServices() {
    const [services, setServices] = useState<Service[]>([]);
    const navigate = useNavigate();
    const data = useLoaderData() as Service[];

    useEffect(() =>  setServices(data.slice(0, 6)), [data]);

    const handleViewDetails = (serviceId: number) => {
        navigate(`/service/${serviceId}`);
    };

    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.header}>
                    <h2 className={s.title}>Popular Winter Care Services</h2>
                    <p className={s.subtitle}>Discover our most-loved services to keep your pets happy and healthy this winter</p>
                </div>

                <div className={s.grid}>
                    {services.map(service => (
                        <ServiceCard
                            key={service.serviceId}
                            service={service}
                            onViewDetails={handleViewDetails}
                        />
                    ))}
                </div>

                <div className={s.viewAll}>
                    <Link to={SERVICES} className={s.viewAllButton}>View All Services</Link>
                </div>
            </div>
        </section>
    );
}
