import React from 'react';
import { motion } from 'framer-motion';
import { Palette, PartyPopper, Cookie, Clock, Heart, MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.3, ease: "easeOut" } },
};

const FeatureCard = ({ icon, iconBg, iconColor, title, description, badge, delay = 0, className = "" }) => (
    <ScrollReveal delay={delay}>
        <motion.div
            variants={cardVariants} initial="rest" whileHover="hover"
            className={`bg-white border border-slate-100 rounded-2xl p-7 cursor-default h-full shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
        >
            <div className="flex items-start justify-between mb-5">
                <div className={`p-3 ${iconBg} ${iconColor} rounded-xl`}>
                    {icon}
                </div>
                {badge && (
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">{badge}</span>
                )}
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
        </motion.div>
    </ScrollReveal>
);

export const BentoGrid = () => {
    return (
        <section id="about" className="py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-4 block">What We Do</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            More Than Just Childcare
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            We're a family-run service dedicated to making before and after school something your child genuinely looks forward to.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<Palette className="w-6 h-6" />}
                        iconBg="bg-blue-50"
                        iconColor="text-blue-600"
                        title="Crafts & Creative Play"
                        description="From painting to model-making, we keep hands busy and imaginations fired up every single session."
                        delay={0}
                    />

                    <FeatureCard
                        icon={<PartyPopper className="w-6 h-6" />}
                        iconBg="bg-amber-50"
                        iconColor="text-amber-600"
                        title="Themed Event Days"
                        description="Halloween costumes, St George's Day celebrations, Christmas parties. We make every occasion special."
                        badge="Popular"
                        delay={0.1}
                    />

                    <FeatureCard
                        icon={<Cookie className="w-6 h-6" />}
                        iconBg="bg-orange-50"
                        iconColor="text-orange-600"
                        title="Snacks Included"
                        description="A healthy breakfast to start the day and an afterschool snack to refuel. Always included in your session."
                        delay={0.2}
                    />

                    <FeatureCard
                        icon={<Clock className="w-6 h-6" />}
                        iconBg="bg-green-50"
                        iconColor="text-green-600"
                        title="Flexible Hours"
                        description="Breakfast Club from 7:30 to 8:45 and Afterschool Club from 3:00 to 6:00, designed to fit around your working day."
                        delay={0.1}
                    />

                    <FeatureCard
                        icon={<Heart className="w-6 h-6" />}
                        iconBg="bg-pink-50"
                        iconColor="text-pink-600"
                        title="Family-Run Business"
                        description="Owned by Trish and managed by Danni and Claudia. We know every child by name because we genuinely care."
                        delay={0.2}
                    />

                    <FeatureCard
                        icon={<MessageCircle className="w-6 h-6" />}
                        iconBg="bg-purple-50"
                        iconColor="text-purple-600"
                        title="SEND Support"
                        description="We can support children with specific requirements including SEND. Please reach out to discuss your child's needs. We're here to help."
                        delay={0.3}
                    />
                </div>

                {/* Bottom CTA */}
                <ScrollReveal delay={0.2}>
                    <div className="mt-12 text-center">
                        <a
                            href="https://letsplay.magicbooking.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-red-600/20 transition-colors"
                            style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                            Book a Session →
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
