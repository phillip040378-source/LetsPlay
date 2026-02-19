import React, { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import rainbowImage from '../assets/LetsPlayv2.jpg';
import { FloatingNav } from '@/components/ui/FloatingNav';

const Header = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "News & Activities", link: "/blog", icon: <BookOpen className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: "Meet the Team", link: "/staff", icon: <Users className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />

      <header className="bg-white py-4 shadow-sm relative z-40">
        <div className="container mx-auto px-4 flex justify-center md:justify-start items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={rainbowImage}
              alt="Let's Play Logo"
              className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
