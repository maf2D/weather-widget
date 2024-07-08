import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: string;
    black: string;
    orange: string;
    blue: string;
    lightBlue: string;
    lightGrey: string;
    darkGrey: string;
    red: string;
  }

  interface PaletteOptions {
    white?: string;
    black?: string;
    orange?: string;
    blue?: string;
    lightBlue?: string;
    lightGrey?: string;
    darkGrey?: string;
    red?: string;
  }
}

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}
