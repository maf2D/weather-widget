'use client';

import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { useResize, useUserTheme, Theme } from '@/hooks';
import { WIDGET_SIZE, SCREEN_SIZE } from '@/constants';

type ContextType = {
  widgetSize: WIDGET_SIZE | null;
  theme: Theme;
};

type ProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<ContextType>({
  widgetSize: null,
  theme: 'light'
});

export const AppProvider: FC<ProviderProps> = ({ children }) => {

  // hooks
  const { windowWidth, windowHeight } = useResize();
  const { theme } = useUserTheme();
  const { palette } = useTheme();

  // states
  const [widgetSize, setWidgetSize] = useState<WIDGET_SIZE | null>(null);

  // effect that updates widget-container size based on a screen height and width
  useEffect(() => {

    // 2x2 by default
    let size = WIDGET_SIZE['2x2'];

    // check for a wide screen with a small height
    if (
      windowWidth >= SCREEN_SIZE.MD &&
      windowHeight < SCREEN_SIZE.MD
    ) {
      size = WIDGET_SIZE['4x2'];
    }

    // check for a big screen
    if (
      windowWidth > SCREEN_SIZE.MD &&
      windowHeight > SCREEN_SIZE.MD
    ) {
      size = WIDGET_SIZE['4x4'];
    }

    setWidgetSize(size);
  }, [windowWidth, windowHeight]);

  // effect that updates mui theme mode based on a user theme (dark or light)
  // to use it in styled components dynamically
  useEffect(() => {
    palette.mode = theme;
  }, [theme]);

  return (
    <AppContext.Provider value={{
      widgetSize,
      theme
    }}>
      {children}
    </AppContext.Provider>
  );
};
