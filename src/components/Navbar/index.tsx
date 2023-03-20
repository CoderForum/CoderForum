'use client';

import Link from 'next/link';
import Logo from '../Logo';
import { NavbarContainer } from './styles';

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo />

      <nav>
        <Link href="/posts">Publicações</Link>
        <Link
          href="/auth/login"
          style={{ fontWeight: 'bold' }}
        >
          Autenticar-se
        </Link>
      </nav>
    </NavbarContainer>
  );
}
