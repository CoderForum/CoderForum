import styled from 'styled-components';

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #272a2b;

  width: 100%;

  * {
    color: #fff;
  }

  nav {
    display: flex;
    gap: 10px;
    a {
      text-decoration: none;
      &:hover {
        color: #ccc;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;
