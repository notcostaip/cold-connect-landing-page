import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Comparison } from '../components/Comparison';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';

export const Home = () => {
    return (
        <>
            <Header />
            <main className="relative z-10">
                <Hero />
                <Comparison />
                <Features />
                <Pricing />
                <FAQ />
            </main>
        </>
    );
};
