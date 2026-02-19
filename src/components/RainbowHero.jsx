import React from 'react';
import rainbowImage from '../assets/LetsPlay.jpg';

const RainbowHero = () => {
    return (
        <div className="w-full bg-white text-center relative overflow-hidden">
            <div className="container mx-auto px-4 py-8">
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={rainbowImage}
                        alt="Let's Play Rainbow"
                        className="w-full h-auto object-cover"
                        style={{ maxHeight: '400px', objectPosition: 'center top' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RainbowHero;
