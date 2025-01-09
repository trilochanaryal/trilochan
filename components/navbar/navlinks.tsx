'use client';

import Link from 'next/link';
import { ThemeToggler } from '../theme-toggler';
import { cn } from '@/lib/utils';

const navItems = {
  '/': { name: 'Home' },
  '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/photos': { name: 'Photos' },
};

type Props = {
  isMenuOpen: boolean;
};

export function Navlinks({ isMenuOpen }: Props) {
  return (
    <nav
      className={cn(
        'fixed inset-0 bg-background/95 backdrop-blur-sm md:static md:bg-transparent md:backdrop-blur-none bg-red-500',
        'flex flex-col items-center justify-center w-full',
        'transition-all duration-300 ease-in-out',
        'md:flex md:flex-row md:justify-end md:items-center md:h-auto',
        isMenuOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible md:opacity-100 md:visible',
      )}
    >
      {Object.entries(navItems).map(([path, { name }]) => (
        <Link
          key={path}
          href={path}
          className="py-4 md:py-2 px-4 text-xl md:text-base transition-colors hover:text-primary"
        >
          {name}
        </Link>
      ))}
      <div className="mt-8 md:mt-0 md:ml-6">
        <ThemeToggler />
      </div>
    </nav>
  );
}
