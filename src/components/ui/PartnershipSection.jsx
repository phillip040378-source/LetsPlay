import React from 'react';
import { School, Handshake, ShieldCheck, Users } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const PartnershipSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <ScrollReveal direction="left">
                        <div>
                            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-4 block">Our Partnership</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                Based at Davyhulme Primary School
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                We operate in close partnership with Davyhulme Primary School in Urmston. This isn't just a venue — it's a genuine collaboration. The school trusts us to look after their pupils, and we follow their term dates, their safeguarding policies, and their values.
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Children move seamlessly from their school day into our club. They stay in a familiar, safe environment with staff who know the school community. For parents, it means one simple drop-off and collection point — no extra travel, no extra stress.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <TrustPill icon={<Handshake className="w-5 h-5 text-navy-900" />} text="School Partnership" />
                                <TrustPill icon={<ShieldCheck className="w-5 h-5 text-navy-900" />} text="Ofsted Registered" />
                                <TrustPill icon={<School className="w-5 h-5 text-navy-900" />} text="On-Site at School" />
                                <TrustPill icon={<Users className="w-5 h-5 text-navy-900" />} text="DBS Checked Staff" />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Visual Card */}
                    <ScrollReveal direction="right">
                        <div className="bg-navy-900 text-white rounded-3xl p-10 relative overflow-hidden shadow-2xl shadow-navy-900/20">
                            {/* Pattern */}
                            <div className="absolute inset-0 opacity-[0.05]" style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                                backgroundSize: '24px 24px'
                            }}></div>

                            <div className="relative z-10">
                                <div className="p-3 bg-white/10 border border-white/10 w-fit rounded-xl mb-6">
                                    <School className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    Davyhulme Primary School
                                </h3>
                                <div className="space-y-3 text-slate-300">
                                    <p>Canterbury Road</p>
                                    <p>Urmston, M41 0RX</p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <p className="text-sm text-slate-400 mb-2">School Term Dates</p>
                                    <p className="text-slate-200 leading-relaxed">
                                        We follow Davyhulme Primary's term dates. Our Holiday Club runs during school holidays — check our booking system for available dates.
                                    </p>
                                </div>

                                <div className="mt-6 flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-sm font-medium text-green-300">Currently Taking Bookings</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

const TrustPill = ({ icon, text }) => (
    <div className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-xl text-navy-900 font-medium text-sm">
        {icon}
        {text}
    </div>
);

export default PartnershipSection;
