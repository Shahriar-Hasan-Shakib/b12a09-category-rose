import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import s from './Hero.module.css';
import { SERVICES } from '@/constant/routes';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
        title: 'WarmPaws',
        subtitle: 'Keep Your Pets Cozy This Winter'
    },
    {
        image: 'https://images.unsplash.com/photo-1695492785760-0054fdea5d1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
        title: 'Winter Pet Care',
        subtitle: 'Professional Services for Your Furry Friends'
    },
    {
        image: 'https://images.unsplash.com/photo-1660970556157-76a3ce53993c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
        title: 'Expert Grooming',
        subtitle: 'Specialized Winter Treatments'
    }
];

export function Hero() {
    return (
        <div className={s.heroContainer}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="h-1/2 sm:h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={s.slide}>
                            <img src={slide.image} alt={slide.title} className={s.slideImage} />
                            <div className={s.overlay}>
                                <div className={s.content}>
                                    <h1 className={s.title}>{slide.title}</h1>
                                    <p className={s.subtitle}>{slide.subtitle}</p>
                                    <Link to={SERVICES} className={s.button}>
                                        Explore Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
