import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  html,
  body {
    min-height: 100%;
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
