import Link from 'next/link';
import styled from 'styled-components';

export const LogoContainer = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  svg,
  span {
    color: ${({ theme }) => theme.colors.textPrimary};
    fill: ${({ theme }) => theme.colors.textPrimary};
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
    svg,
    span {
      color: ${({ theme }) => theme.colors.textSecondary};
      fill: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;
