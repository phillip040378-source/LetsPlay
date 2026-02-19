import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl font-bold text-navy-900">
          Let's Play
        </Link>

        <button className="md:hidden text-navy-900 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-slate-600 hover:text-red-600 font-medium transition-colors">Home</Link>
          <Link to="/blog" className="text-slate-600 hover:text-red-600 font-medium transition-colors">News & Activities</Link>
          <Link to="/staff" className="text-slate-600 hover:text-red-600 font-medium transition-colors">Meet the Team</Link>
          <a
            href="https://letsplay.magicbooking.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30 flex items-center"
          >
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col p-4 space-y-4 md:hidden transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <Link to="/" className="text-slate-600 font-medium hover:text-red-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/blog" className="text-slate-600 font-medium hover:text-red-600" onClick={() => setIsMenuOpen(false)}>News & Activities</Link>
          <Link to="/staff" className="text-slate-600 font-medium hover:text-red-600" onClick={() => setIsMenuOpen(false)}>Meet the Team</Link>
          <a href="https://letsplay.magicbooking.co.uk/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-red-600 text-white px-5 py-3 rounded-xl font-medium">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
