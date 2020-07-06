import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    a: {
      // red
      a: '#cf6766',
      // dark blue
      b: '#30415d',
      // black
      c: '#031424',
      // light blue
      d: '#8eaebd',
    },
  },
  fonts: {
    a: {
      a: 'Montserrat',
      b: 'Source Sans Pro',
    },
  },
  selectedColor: 'a',
  selectedFont: 'a',
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
