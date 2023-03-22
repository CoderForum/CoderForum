import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme {
    colors: {
      background: string;
      
      primary: string;
      secondary: string;

      textPrimary: string;
      textSecondary: string;
    };
  };
}
