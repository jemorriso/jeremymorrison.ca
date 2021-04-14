import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --mobileS: 330px;
    --mobileM: 400px;
    --mobileL: 480px;
    --tabletS: 600px;
    --tabletL: 768px;
    --desktopXS: 900px;
    --desktopS: 1080px;
    --desktopM: 1200px;
    --desktopL: 1400px;

    --font-size-xxs: 12px;
    --font-size-xs: 13px;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-xxl: 22px;
    --font-size-heading: 32px; 
  }
    
  html {
    box-sizing: border-box;
  }

  // See 'Universal Box Sizing with inheritance': https://css-tricks.com/box-sizing/  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.3;
    /* Use theme for sans-serif font and mono font */
    // font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-family: ${({ theme }) => theme.fontSans};
    // font-family: ${({ theme }) => theme.fontMono};
  }

  a {
    /* display: inline-block; */
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }

  hr {
    border: 0;
    border-top: 1px solid;
  }
`;

export default GlobalStyle;
