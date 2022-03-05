import { useLayoutEffect, useState } from 'react';
import { availableSpaceBreakpoint } from '../../utils/const';
import { debounce, windowLoaded } from '../../utils/helpers';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(
    windowLoaded() && window.innerWidth < availableSpaceBreakpoint
  );

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < availableSpaceBreakpoint);
    };
    window.addEventListener('resize', debounce(updateSize, 250));
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
