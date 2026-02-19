import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Star, Shield } from 'lucide-react';
import rainbowImage from '../../assets/LetsPlayv2.jpg';
import { Typewriter } from "../ui/Typewriter";

const VibrantHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#f8fafc] pt-20">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-100/40 rounded-full blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">

                {/* Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm text-slate-600 text-sm font-medium"
                >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Your Child's Happy Place</span>
                </motion.div>

                {/* Main Hero Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mb-8 relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <img
                        src={rainbowImage}
                        alt="Let's Play Rainbow"
                        className="h-32 md:h-48 w-auto object-contain relative z-10 drop-shadow-xl hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Where Every Child Is <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        Known & Loved
                    </span>
                </h1>

                {/* Typewriter subtitle */}
                <div className="text-2xl md:text-3xl font-bold mb-6 h-12" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    <Typewriter
                        text={["Seen as Special", "Valued", "Safe", "Happy"]}
                        speed={80}
                        deleteSpeed={40}
                        waitTime={2000}
                        loop={true}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500"
                    />
                </div>

                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We create a safe, vibrant environment where your children aren't just looked after—they are <span className="font-semibold text-blue-600">seen</span>, <span className="font-semibold text-pink-600">valued</span>, and <span className="font-semibold text-amber-600">inspired</span>.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <FeaturePill icon={<Shield className="w-4 h-4 text-green-500" />} text="Safe Environment" />
                    <FeaturePill icon={<Heart className="w-4 h-4 text-red-600" />} text="Caring Staff" />
                    <FeaturePill icon={<Star className="w-4 h-4 text-yellow-500" />} text="Fun Activities" />
                </div>

                {/* Primary CTA */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        href="https://letsplay.magicbooking.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Book a Session Now <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

const FeaturePill = ({ icon, text }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-700 font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
        {icon}
        {text}
    </div>
);

export default VibrantHero;
