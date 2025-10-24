export interface Service {
    serviceId: number;
    serviceName: string;
    providerName: string;
    providerEmail: string;
    price: number;
    rating: number;
    slotsAvailable: number;
    description: string;
    image: string;
    category: string;
}

export interface ServiceCardProps {
    service: Service;
    onViewDetails?: (serviceId: number) => void;
}
