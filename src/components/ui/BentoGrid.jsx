import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Shield, Smile, Coffee, Sun } from 'lucide-react';
import { cn } from "@/lib/utils";

export const BentoGrid = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Parents <span className="text-pink-500">Love Us</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">We don't just "mind" children. We engage them, teach them, and give them a space to be themselves.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Large Card Left */}
                    <div className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">New</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Exciting Activities Every Day</h3>
                        <p className="text-slate-600 mb-4">From arts & crafts to outdoor sports, our schedule is packed with activities that spark creativity and fitness.</p>
                        <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-80 group-hover:scale-[1.02] transition-transform duration-500"></div>
                    </div>

                    {/* Tall Card Right */}
                    <div className="md:row-span-2 bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                        <div>
                            <div className="p-3 bg-white/10 w-fit rounded-2xl mb-6">
                                <Shield className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Safety First, Always</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Our staff are fully vetted, qualified, and trained in pediatric first aid. We maintain strict safeguarding policies to ensure your peace of mind.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm font-medium text-green-400">Ofsted Registered</span>
                        </div>
                    </div>

                    {/* Small Card 1 */}
                    <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 hover:shadow-lg transition-shadow">
                        <div className="p-3 bg-orange-100 text-orange-600 w-fit rounded-2xl mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Experienced Team</h3>
                        <p className="text-slate-600 text-sm">Our staff bring years of childcare experience and genuine passion.</p>
                    </div>

                    {/* Small Card 2 */}
                    <div className="bg-purple-50 border border-purple-100 rounded-3xl p-6 hover:shadow-lg transition-shadow">
                        <div className="p-3 bg-purple-100 text-purple-600 w-fit rounded-2xl mb-4">
                            <Smile className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Social Growth</h3>
                        <p className="text-slate-600 text-sm">A place to make new friends and build confidence outside of school.</p>
                    </div>

                    {/* Wide Card Bottom */}
                    <div className="md:col-span-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-3xl p-8 flex items-center justify-between shadow-lg">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Ready to join the fun?</h3>
                            <p className="text-pink-100">Spaces fill up quickly for our Holiday Clubs!</p>
                        </div>
                        <a
                            href="https://letsplay.magicbooking.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
