import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export const useUserTheme = () => {
  const [themeColor, setThemeColor] = useState<Theme>('light');

  useEffect(() => {

    // check for ssr
    if (typeof window === 'undefined') return;

    // check for the dark theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeColor('dark');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onThemeChange = (event: MediaQueryListEvent) => {
      setThemeColor(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', onThemeChange);
    return () => mediaQuery.removeEventListener('change', onThemeChange);
  }, []);

  return { themeColor };
};