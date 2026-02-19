import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import rainbowImage from '../assets/LetsPlayv2.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  return (
    <header className="bg-white py-3 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={rainbowImage}
            alt="Let's Play Logo"
            className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-heading text-2xl font-bold text-navy-900 tracking-tight group-hover:text-red-600 transition-colors">
            Let's Play
          </span>
        </Link>

        <button className="md:hidden text-navy-900 focus:outline-none p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-slate-700 hover:text-red-600 font-semibold transition-colors text-lg">Home</Link>
          <Link to="/blog" className="text-slate-700 hover:text-red-600 font-semibold transition-colors text-lg">News & Activities</Link>
          <Link to="/staff" className="text-slate-700 hover:text-red-600 font-semibold transition-colors text-lg">Meet the Team</Link>
          <a
            href="https://letsplay.magicbooking.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            Book Now <ArrowRight size={20} />
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-xl flex flex-col border-t border-slate-100 p-4 space-y-4 md:hidden transition-all duration-300 origin-top z-40 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <Link to="/" className="text-navy-900 font-semibold text-lg hover:text-red-600 py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/blog" className="text-navy-900 font-semibold text-lg hover:text-red-600 py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>News & Activities</Link>
          <Link to="/staff" className="text-navy-900 font-semibold text-lg hover:text-red-600 py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Meet the Team</Link>
          <a href="https://letsplay.magicbooking.co.uk/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-bold text-lg shadow-md mt-4">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
