import { useEffect, useRef } from 'react';

export const useIsMobile = () => {
  const screenSize = useRef<number>(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      screenSize.current = window.innerWidth;
    });
    return () => {
      window.removeEventListener('resize', () => {
        screenSize.current = window.innerWidth;
      });
    };
  }, []);

  const mobileBreakpoint = 768;
  return screenSize.current <= mobileBreakpoint;
};
