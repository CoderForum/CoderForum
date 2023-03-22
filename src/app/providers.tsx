'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/context/theme';
import darkTheme from '@/styles/themes/dark';
import lightTheme from '@/styles/themes/light';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [themeObject, setThemeObject] = useState(darkTheme);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    
    if (!['dark', 'light'].includes(theme)) {
      localStorage.setItem('theme', 'dark');
      setThemeObject(darkTheme);
      setTheme('dark');
      return;
    }

    setThemeObject(currentTheme === 'dark' ? darkTheme : lightTheme);
    localStorage.setItem('theme', theme);
  }, [theme, setTheme]);

  return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>;
}
