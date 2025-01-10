'use client';

import React, { useState } from 'react';
import { Hamburger } from './hamburger';
import { Navlinks } from './navlinks';
import { ThemeToggler } from '../theme-toggler';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="max-w-[640px] h-[5rem] px-4 py-6 flex flex-auto md:flex-row-reverse gap-4 items-center justify-end relative w-full md:px-0">
      <ThemeToggler />
      <Hamburger isMenuOpen={isMenuOpen} onToggleHamburger={toggleMenu} />
      <Navlinks isMenuOpen={isMenuOpen} onLinkClick={closeMenu} />
    </header>
  );
}
