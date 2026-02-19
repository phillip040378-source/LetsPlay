import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
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
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "py-3 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm" : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">

                    {/* Brand Name (Text Logo) - Always Visible & Safe */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className={cn(
                            "font-heading font-bold text-2xl tracking-tighter transition-colors",
                            scrolled ? "text-slate-900" : "text-slate-800"
                        )}>
                            Let's Play
                            <span className="text-blue-500">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation - Clean & Simple */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="https://letsplay.magicbooking.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/10"
                        >
                            Book Now
                        </a>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimateMobileMenu isOpen={mobileMenuOpen} close={() => setMobileMenuOpen(false)} links={navLinks} />
        </>
    );
};

const AnimateMobileMenu = ({ isOpen, close, links }) => (
    <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-24 px-6 md:hidden"
    >
        <div className="flex flex-col gap-6 items-center text-center">
            {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    onClick={close}
                    className="text-2xl font-bold text-slate-800 hover:text-blue-500"
                >
                    {link.name}
                </Link>
            ))}
            <a
                href="https://letsplay.magicbooking.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-bold shadow-lg"
            >
                Book Now
            </a>
        </div>
    </motion.div>
);

export default StickyHeader;
