'use client';

import Link from 'next/link';
import { useCallback } from 'react';
import { VscColorMode } from 'react-icons/vsc';
import { useTheme } from '@/context/theme';
import Logo from '../Logo';
import { NavbarContainer } from './styles';

export default function Navbar() {
  const theme = useTheme();

  const handleThemeChange = useCallback(() => {
    theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  return (
    <NavbarContainer>
      <Logo />
      <Link className="posts" href="/posts">
        Publicações
      </Link>

      <nav>
        <Link href="/auth/login" style={{ fontWeight: 'bold' }}>
          Entrar
        </Link>

        <VscColorMode
          onClick={handleThemeChange}
          onKeyDown={({ key }) =>
            ['Enter', ' '].includes(key) && handleThemeChange()
          }
          role="button"
          tabIndex={0}
        />
      </nav>
    </NavbarContainer>
  );
}
