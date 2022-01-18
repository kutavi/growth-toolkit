import { useEffect, useRef } from 'react';

const defaultBreakpoint = 1450;
export const useIsWindowLessThan = (breakpoint = defaultBreakpoint) => {
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

  return screenSize.current <= breakpoint;
};
