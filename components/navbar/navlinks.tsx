'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = {
  '/': { name: 'Home' },
  '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/photos': { name: 'Photos' },
};

type Props = {
  isMenuOpen: boolean;
  onLinkClick: () => void;
};

export function Navlinks({ isMenuOpen, onLinkClick }: Props) {
  return (
    <>
      <nav
        className={cn(
          'z-40 fixed -inset-y-5 backdrop-blur-lg md:static md:backdrop-blur-none',
          'flex flex-col items-center justify-center w-full',
          'md:flex md:flex-row md:justify-start md:items-center md:h-auto',
          isMenuOpen
            ? 'opacity-100 visible transition-all duration-700 ease-in-out'
            : 'opacity-0 invisible md:opacity-100 md:visible',
        )}
      >
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="py-4 md:py-2 pr-6 text-xl md:text-base transition-colors hover:text-primary"
            onClick={onLinkClick}
          >
            {name}
          </Link>
        ))}
      </nav>
    </>
  );
}
