'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration error by only mounting on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevents hydration error
  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className='text-xl cursor-pointer hover:text-amber-500'
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className='text-xl cursor-pointer hover:text-amber-500'
        />
      )}
    </div>
  );
}
