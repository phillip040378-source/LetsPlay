import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
            {/* Subtle gradient accent at top */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h3 className="text-white text-2xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Let's Play<span className="text-blue-400">.</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Before & After School Club at Davyhulme Primary School. Creating a safe, vibrant space for every child.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Contact</h4>
                        <div className="space-y-4">
                            <a href="tel:07973819280" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group text-sm">
                                <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                                07973 819280
                            </a>
                            <a href="mailto:letsplaynw@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group text-sm">
                                <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                                letsplaynw@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                <span>Davyhulme Primary School<br />Canterbury Road, Urmston, M41 0RX</span>
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

                    {/* CTA Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "'Outfit', sans-serif" }}>Book a Session</h4>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                            Secure your child's spot today through our online booking system.
                        </p>
                        <a
                            href="https://letsplay.magicbooking.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
                        >
                            Book Now <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Let's Play (NW) Ltd. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs">
                        Manager: Trish Hamadamian
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
