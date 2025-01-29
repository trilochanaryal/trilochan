'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/navbar/icons/index';

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (theme === 'dark') {
          setTheme('light');
          return;
        }
        setTheme('dark');
      }}
    >
      {theme === 'dark' ? (
        <span>
          <SunIcon height={25} width={25} />
        </span>
      ) : (
        <span>
          <MoonIcon height={25} width={25} />
        </span>
      )}
    </button>
  );
}
