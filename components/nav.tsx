'use client';
import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';
import { useState } from 'react';

const navItems = {
  '/': { name: 'Home' },
  '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/photos': { name: 'Photos' },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-gray-600 dark:hover:text-gray-300"
          >
            Trilochan
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {name}
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } pt-4 pb-3 space-y-3`}
        >
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="block text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <div className="pt-2">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
