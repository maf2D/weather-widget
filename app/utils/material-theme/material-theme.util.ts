'use client';

import { createTheme } from '@mui/material/styles';
import { Plus_Jakarta_Sans } from 'next/font/google';

export const plus = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

export const theme = createTheme({
  direction: 'ltr',

  palette: {
    mode: 'light',
    white: '#ffffff',
    black: '#000000',
    orange: '#fcc52b',
    blue: '#404ff5',
    lightBlue: '#8c9aff',
    lightGrey: '#8f8f8f',
    darkGrey: '#424040',
    red: '#fc2c21'
  },

  typography: {
    fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: '2.75rem',
      fontFamily: plus.style.fontFamily
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      fontFamily: plus.style.fontFamily
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontFamily: plus.style.fontFamily
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.3125rem',
      lineHeight: '1.6rem'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.6rem'
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.2rem'
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 400
    }
  }
});
