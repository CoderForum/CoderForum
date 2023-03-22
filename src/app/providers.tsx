'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@/context/theme';
import darkTheme from '@/styles/themes/dark';
import lightTheme from '@/styles/themes/light';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [themeObject, setThemeObject] = useState(darkTheme);
  const { theme } = useTheme();

  useEffect(
    () => setThemeObject(theme === 'dark' ? darkTheme : lightTheme),
    [theme]
  );

  return <ThemeProvider theme={themeObject}>{children}</ThemeProvider>;
}
