'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { theme } from '@/utils';
import { AppProvider } from '@/contexts';

import './globals.css';

type RootLayoutProps = {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang='en'>
    <body>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <AppProvider>
            {children}
        </AppProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
