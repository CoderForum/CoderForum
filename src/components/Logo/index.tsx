'use client';

import Link from 'next/link';
import { TbNews } from 'react-icons/tb';
import styled from 'styled-components';

const LogoContainer = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  svg,
  span {
    color: #fff;
  }

  svg {
    font-size: 1.5rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: bold;
    user-select: none;
  }

  &:hover {
    cursor: pointer;

    span,
    svg path {
      color: #ccc;
    }
  }
`;

export default function Logo() {
  return (
    <LogoContainer href="/">
      <TbNews />

      <span>CoderForum</span>
    </LogoContainer>
  );
}
