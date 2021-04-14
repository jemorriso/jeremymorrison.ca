import { css } from 'styled-components';

const nord = {
  body: '#1D2129',
  text: '#D1DBE5',
  accent: '#88C0D0',
};

const fonts = {
  // fontSans: 'Tahoma, Helvetica, Arial, Roboto, sans-serif',
  // fontMono: 'Fira Code, monospace',
  // fontMono: 'Oxygen Mono, monospace',
  fontMono: 'Source Code Pro, monospace',
  // fontSans: 'Source Sans Pro, sans-serif',
  fontSans: 'Roboto, sans-serif',
};

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

export const theme = { ...nord, ...fonts, mixins };
