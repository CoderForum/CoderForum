'use client';

import Navbar from '@/components/Navbar';
import GlobalStyle from '@/styles/globals';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
    </>
  );
}
