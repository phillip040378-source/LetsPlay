import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sun, Moon } from 'lucide-react';
import rainbowImage from '../../assets/LetsPlayv2.jpg';
import { Typewriter } from "../ui/Typewriter";

const BoldHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-navy-900">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
            }}></div>

            {/* Red accent glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px]"></div>

            <div className="max-w-6xl mx-auto px-4 py-20 z-10 relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-6 border border-red-600/30 px-4 py-1.5 rounded-full bg-red-600/10">
                                A Family-Run Childcare Provider
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            Before & After School Care They'll{' '}
                            <span className="text-red-600">Love</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg"
                        >
                            Crafts, themed event days, outdoor play and snacks — all within Davyhulme Primary School.
                            Where every child is known by name.
                        </motion.p>

                        {/* Hours Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-3 mb-10"
                        >
                            <div className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                                <Sun className="w-4 h-4 text-amber-400" />
                                Breakfast: 7:30 – 8:45
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                                <Moon className="w-4 h-4 text-blue-400" />
                                Afterschool: 3:00 – 6:00
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://letsplay.magicbooking.co.uk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-red-600/30 transition-colors"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                Book a Session <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                Learn More
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Logo Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative">
                            <div className="absolute -inset-6 bg-red-600/15 rounded-3xl blur-2xl"></div>
                            <img
                                src={rainbowImage}
                                alt="Let's Play Rainbow Logo"
                                className="h-48 md:h-72 w-auto object-contain relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Typewriter at bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center"
                >
                    <span className="text-slate-400 text-sm mr-2">Every child is</span>
                    <Typewriter
                        text={["Seen as Special", "Valued", "Safe", "Happy", "Part of Our Family"]}
                        speed={80}
                        deleteSpeed={40}
                        waitTime={2500}
                        loop={true}
                        className="text-white font-bold text-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default BoldHero;
