import { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { ServiceCard } from '@/shared/components/serviceCard/ServiceCard';
import type { Service } from '@/shared/components/serviceCard/ServiceCard.types';
import styles from './Services.module.css';

export const Services = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [filter, setFilter] = useState<string>('All');
    const navigate = useNavigate();
    const serviceData = useLoaderData();
    useEffect(() => setServices(serviceData as Service[]), [serviceData]);

    const categories = ['All', ...new Set(services.map(s => s.category))];
    const filteredServices = filter === 'All'
        ? services
        : services.filter(s => s.category === filter);

    const handleViewDetails = (serviceId: number) => {
        navigate(`/service/${serviceId}`);
    };

    return (
        <div className={styles.Services}>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our Winter Pet Care Services
                    </h1>
                    <p className="text-lg text-gray-600">
                        Comprehensive care solutions for your beloved pets this winter season
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${filter === category
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map(service => (
                        <ServiceCard
                            key={service.serviceId}
                            service={service}
                            onViewDetails={handleViewDetails}
                        />
                    ))}
                </div>

                {filteredServices.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-500">No services found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};