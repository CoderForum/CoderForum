import styled from 'styled-components';

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.secondary};

  width: 100%;

  * {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  a {
    text-decoration: none;

    &.posts {
      margin-left: 15px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: auto;

    /* Theme Switcher */
    svg {
      cursor: pointer;
      fill: ${({ theme }) => theme.colors.textPrimary};
      font-size: 1.5rem;

      &:hover path {
        fill: ${({ theme }) => theme.colors.textSecondary};
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;
