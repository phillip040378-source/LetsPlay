import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

const useCounter = (end, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [end, duration, startCounting]);

    return count;
};

const StatCard = ({ number, suffix = "", label, icon, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useCounter(number, 2000, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300 group"
        >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {count}{suffix}
            </div>
            <div className="text-slate-500 font-medium mt-2 text-sm uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );
};

const StatsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4 block">By the Numbers</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Families</span> Across the Community
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatCard number={10} suffix="+" label="Years Experience" icon="🏫" delay={0} />
                    <StatCard number={200} suffix="+" label="Happy Children" icon="😊" delay={0.1} />
                    <StatCard number={15} suffix="" label="Trained Staff" icon="👩‍🏫" delay={0.2} />
                    <StatCard number={50} suffix="+" label="Activities" icon="🎨" delay={0.3} />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
