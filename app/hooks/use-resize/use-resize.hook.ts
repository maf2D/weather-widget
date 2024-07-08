import { useEffect, useState } from 'react';
import { debounce } from '@/utils';

export const useResize = () => {
  let windowW = 0;
  let windowH = 0;

  // check for ssr
  if (typeof window !== 'undefined') {
    windowW = window.innerWidth;
    windowH = window.innerHeight;
  }

  const [windowWidth, setWindowWidth] = useState(windowW);
  const [windowHeight, setWindowHeight] = useState(windowH);

  useEffect(() => {

    // check for ssr
    if (typeof window === 'undefined') return;

    // use debounce to get rid of unnecessary renders
    const resizeEventHandler = debounce(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      setWindowWidth(windowWidth);
      setWindowHeight(windowHeight);
    }, 300);

    window.addEventListener('resize', resizeEventHandler);
    return () => window.removeEventListener('resize', resizeEventHandler);
  }, []);

  return { windowWidth, windowHeight };
};
