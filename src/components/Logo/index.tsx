'use client';

import { TbNews } from 'react-icons/tb';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

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
  }

`;

export default function Logo() {
  return (
    <LogoContainer>
      <TbNews />
      <span>DevTalk</span>
    </LogoContainer>
  );
}
