import React from 'react';
import RainbowHero from '../components/RainbowHero';
import Hero from '../components/Hero';
import About from '../components/About';
import OperationalInfo from '../components/OperationalInfo';
import Inclusion from '../components/Inclusion';
import TrustSignals from '../components/TrustSignals';

const Home = () => {
    return (
        <>
            <RainbowHero />
            <Hero />
            <About />
            <OperationalInfo />
            <Inclusion />
            <TrustSignals />
        </>
    );
};

export default Home;
