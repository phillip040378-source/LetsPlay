import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-900 text-slate-300 relative overflow-hidden">
            {/* Red accent bar */}
            <div className="h-1 bg-red-600"></div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-white text-2xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Let's Play<span className="text-red-600">.</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            A family-run before & after school club based at Davyhulme Primary School.
                        </p>
                        <div className="text-slate-400 text-sm">
                            <p><strong className="text-slate-300">Owner:</strong> Trish</p>
                            <p><strong className="text-slate-300">Managers:</strong> Danni & Claudia</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Contact</h4>
                        <div className="space-y-4">
                            <a href="tel:07973819280" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group text-sm">
                                <Phone className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                                07973 819280
                            </a>
                            <a href="mailto:letsplaynw@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group text-sm">
                                <Mail className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
                                letsplaynw@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                                <span>Davyhulme Primary School<br />Canterbury Road, Urmston<br />M41 0RX</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Links</h4>
                        <div className="space-y-3">
                            <Link to="/" className="block text-slate-400 hover:text-white transition-colors text-sm">Home</Link>
                            <Link to="/blog" className="block text-slate-400 hover:text-white transition-colors text-sm">News & Activities</Link>
                            <Link to="/staff" className="block text-slate-400 hover:text-white transition-colors text-sm">Meet the Team</Link>
                        </div>
                    </div>

                    {/* Hours & Booking */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Hours</h4>
                        <div className="space-y-2 text-slate-400 text-sm mb-6">
                            <p><strong className="text-slate-300">Breakfast Club:</strong> 7:30 – 8:45</p>
                            <p><strong className="text-slate-300">Afterschool Club:</strong> 3:00 – 6:00</p>
                            <p className="text-xs text-slate-500 mt-2">Following Davyhulme Primary term dates</p>
                        </div>
                        <a
                            href="https://letsplay.magicbooking.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-red-600/20"
                        >
                            Book Now <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Let's Play (NW) Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
