import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Star, Shield, Smile } from 'lucide-react';
import rainbowImage from '../../assets/LetsPlayv2.jpg';
import { TypewriterEffect } from "../ui/Typewriter";

const VibrantHero = () => {
    const words = [
        { text: "Seen", className: "text-blue-500" },
        { text: "as", className: "text-slate-700" },
        { text: "Special", className: "text-purple-500" },
        { text: "Valued", className: "text-pink-500" },
        { text: "Safe", className: "text-green-500" },
        { text: "Happy", className: "text-yellow-500" },
    ];

    // Simpler words array for the strict Typewriter component structure if needed, 
    // but we can also just use the headline directly.
    // Let's use a custom animated headline for maximum control over the "Playful" vibe.

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
            {/* 1. Animated Mesh Gradient Background (The "Relaxed" Vibe) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-100/40 rounded-full blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">

                {/* 2. Floating Badge (Premium Touch) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm text-slate-600 text-sm font-medium"
                >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Your Child's Happy Place</span>
                </motion.div>

                {/* 3. Main Hero Image (The Anchor) */}
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

                {/* 4. Typewriter Headline */}
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                    Where Every Child Is <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        Known & Loved
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
                    We create a safe, vibrant environment where your children aren't just looked after—they are <span className="font-semibold text-blue-600">seen</span>, <span className="font-semibold text-pink-600">valued</span>, and <span className="font-semibold text-amber-600">inspired</span>.
                </p>

                {/* 5. Feature Pills (Quick Trust Signals) */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <FeaturePill icon={<Shield className="w-4 h-4 text-green-500" />} text="Safe Environment" />
                    <FeaturePill icon={<Heart className="w-4 h-4 text-red-500" />} text="Caring Staff" />
                    <FeaturePill icon={<Star className="w-4 h-4 text-yellow-500" />} text="Fun Activities" />
                </div>

                {/* 6. Primary Action (Gradient Button) */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        href="https://letsplay.magicbooking.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                        Book a Session Now <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

const FeaturePill = ({ icon, text }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-700 font-medium text-sm">
        {icon}
        {text}
    </div>
);

export default VibrantHero;
