'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  isMenuOpen: boolean;
  onToggleHamburger: () => void;
};

export function Hamburger({ isMenuOpen, onToggleHamburger }: Props) {
  return (
    <button
      className="z-50 flex flex-col md:hidden"
      onClick={onToggleHamburger}
      aria-label="Toggle menu"
    >
      <span
        className={cn(
          'h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ease-in-out',
          isMenuOpen && 'translate-y-1.5 rotate-45',
        )}
      ></span>
      <span
        className={cn(
          'mt-1.5 h-0.5 w-5 bg-black dark:bg-white transition-all duration-300 ease-in-out',
          isMenuOpen && '-translate-y-1.5 -rotate-45',
        )}
      ></span>
    </button>
  );
}
