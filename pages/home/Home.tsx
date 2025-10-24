import { Hero } from './sections/Hero';
import { PopularServices } from './sections/PopularServices';
import { WinterTips } from './sections/WinterTips';
import { ExpertVets } from './sections/ExpertVets';

export const Home = () => {
    return (
        <div>
            <Hero />
            <PopularServices />
            <WinterTips />
            <ExpertVets />
        </div>
    );
};