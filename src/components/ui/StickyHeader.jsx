import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const StickyHeader = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "News & Activities", path: "/blog" },
        { name: "Meet the Team", path: "/staff" },
    ];

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "py-3 bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-900/10"
                        : "py-5 bg-transparent"
                )}
            >
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

                    <Link to="/" className="flex items-center gap-2">
                        <span className="font-bold text-2xl tracking-tight text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            Let's Play
                            <span className="text-red-600">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white/80 hover:text-white font-medium transition-colors text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="https://letsplay.magicbooking.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-bold transition-colors shadow-lg shadow-red-600/20"
                        >
                            Book Now
                        </a>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={mobileMenuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
                className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-sm pt-24 px-6 md:hidden"
            >
                <div className="flex flex-col gap-6 items-center text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-bold text-white hover:text-red-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://letsplay.magicbooking.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-8 py-3 rounded-full bg-red-600 text-white text-lg font-bold shadow-lg"
                    >
                        Book Now
                    </a>
                </div>
            </motion.div>
        </>
    );
};

export default StickyHeader;
