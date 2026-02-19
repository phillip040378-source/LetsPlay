import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Shield, Smile } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
};

export const BentoGrid = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-pink-500 font-semibold text-sm uppercase tracking-widest mb-4 block">What We Offer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Why Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Love Us</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                            We don't just "mind" children. We engage them, teach them, and give them a space to be themselves.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Large Card Left */}
                    <ScrollReveal delay={0}>
                        <motion.div
                            variants={cardVariants} initial="rest" whileHover="hover"
                            className="md:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200/60 rounded-3xl p-8 cursor-default h-full"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl shadow-sm">
                                    <Calendar className="w-7 h-7" />
                                </div>
                                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md shadow-blue-600/20">New</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Exciting Activities Every Day</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                From arts & crafts to outdoor sports, our schedule is packed with activities that spark creativity and fitness.
                            </p>
                            <div className="h-32 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-2xl shadow-inner relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%)] bg-[length:20px_20px]"></div>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Tall Card Right */}
                    <ScrollReveal delay={0.15} className="md:row-span-2">
                        <motion.div
                            variants={cardVariants} initial="rest" whileHover="hover"
                            className="bg-gradient-to-b from-slate-900 to-slate-800 text-white rounded-3xl p-8 flex flex-col justify-between cursor-default h-full shadow-xl shadow-slate-900/10"
                        >
                            <div>
                                <div className="p-3 bg-white/10 backdrop-blur-sm w-fit rounded-2xl mb-6 border border-white/10">
                                    <Shield className="w-7 h-7 text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Safety First, Always</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Our staff are fully vetted, qualified, and trained in pediatric first aid. We maintain strict safeguarding policies to ensure your peace of mind.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
                                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                <span className="text-sm font-medium text-emerald-300">Ofsted Registered</span>
                            </div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Small Card 1 */}
                    <ScrollReveal delay={0.1}>
                        <motion.div
                            variants={cardVariants} initial="rest" whileHover="hover"
                            className="bg-gradient-to-br from-white to-orange-50/50 border border-orange-100/60 rounded-3xl p-7 cursor-default h-full"
                        >
                            <div className="p-3 bg-orange-100 text-orange-600 w-fit rounded-2xl mb-5 shadow-sm">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Experienced Team</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Our staff bring years of childcare experience and genuine passion for children's development.</p>
                        </motion.div>
                    </ScrollReveal>

                    {/* Small Card 2 */}
                    <ScrollReveal delay={0.2}>
                        <motion.div
                            variants={cardVariants} initial="rest" whileHover="hover"
                            className="bg-gradient-to-br from-white to-purple-50/50 border border-purple-100/60 rounded-3xl p-7 cursor-default h-full"
                        >
                            <div className="p-3 bg-purple-100 text-purple-600 w-fit rounded-2xl mb-5 shadow-sm">
                                <Smile className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Social Growth</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">A place to make new friends and build confidence outside of school.</p>
                        </motion.div>
                    </ScrollReveal>

                    {/* Wide CTA Card Bottom */}
                    <ScrollReveal delay={0.1} className="md:col-span-3">
                        <motion.div
                            variants={cardVariants} initial="rest" whileHover="hover"
                            className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-pink-500/20 cursor-default gap-6"
                        >
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Ready to join the fun?</h3>
                                <p className="text-pink-100 text-lg">Spaces fill up quickly for our Holiday Clubs!</p>
                            </div>
                            <a
                                href="https://letsplay.magicbooking.co.uk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-pink-600 px-8 py-3.5 rounded-full font-bold hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl text-lg whitespace-nowrap"
                                style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                                Book Now →
                            </a>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};
