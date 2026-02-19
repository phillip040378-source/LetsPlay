import React from 'react';
import { Typewriter } from '@/components/ui/Typewriter';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[60vh] flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-navy-900 to-blue-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Where Every Child is <br />
                    <span className="text-red-600">
                        <Typewriter
                            text={["Seen as Special", "Valued", "Safe", "Happy"]}
                            speed={70}
                            waitTime={1500}
                            cursorClassName="bg-red-600"
                        />
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Professional, trustworthy, and fun - the perfect place for your child to grow.</p>
                <a href="#availability" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-bold transition-transform transform hover:scale-105 shadow-xl hover:shadow-red-600/40">Check Availability</a>
            </div>
        </section>
    );
};

export default Hero;
