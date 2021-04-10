import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    /* Use theme for sans-serif font and mono font */
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  }
`;
