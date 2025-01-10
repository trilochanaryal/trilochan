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
      className="z-50 rounded-xs rounded p-1 hover:bg-gray-200 hover:dark:bg-[#313131]"
    >
      {theme === 'dark' ? (
        <span className="sun-icon">
          <SunIcon height={25} width={25} />
        </span>
      ) : (
        <span className="moon-icon">
          <MoonIcon height={25} width={25} />
        </span>
      )}
    </button>
  );
}
