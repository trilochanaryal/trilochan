'use client';

import React, { useState } from 'react';
import Hamburger from './hamburger';
import { Navlinks } from './navlinks';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-[640px] mx-auto px-6 sm:px-4 md:px-0 py-4 flex items-center justify-between relative w-full">
        <div className="text-2xl font-bold z-50">Logo</div>
        <Hamburger isMenuOpen={isMenuOpen} onToggleHamburger={toggleMenu} />
        <Navlinks isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
}
