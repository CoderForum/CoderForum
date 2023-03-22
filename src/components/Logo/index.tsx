'use client';

import { FaNewspaper } from 'react-icons/fa';
import { LogoContainer } from './styles';

export default function Logo() {
  return (
    <LogoContainer href="/">
      <FaNewspaper />

      <span>CoderForum</span>
    </LogoContainer>
  );
}
