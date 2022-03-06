import { useEffect, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import SubscribeModal from './components/Subscribe/SubscribeModal';
import * as colors from './styles/_colors.module.scss';
import { track } from './utils/helpers';

import './styles/core.scss';
import { CookieService } from './utils/cookie';

interface AppProps {
  children: any;
}

const timeToWaitBeforeShowing = 300000; // ~5min
export const App = ({ children }: AppProps) => {
  const [hasLoaded, setLoaded] = useState(false);
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const mouseEvent = (e: any) => {
      const existIntentAlreadyShown =
        CookieService.getCookie('exitIntentShown');
      if (!existIntentAlreadyShown) {
        track('Newsletter prompt');
        CookieService.setCookie('exitIntentShown', 'true');
        setSubscribeOpen(true);
        document.removeEventListener('mouseleave', mouseEvent);
      }
    };

    setTimeout(() => {
      const existIntentAlreadyShown =
        CookieService.getCookie('exitIntentShown');
      if (!existIntentAlreadyShown) {
        document.addEventListener('mouseleave', mouseEvent);
      }
    }, timeToWaitBeforeShowing);
  }, []);

  if (!hasLoaded) {
    return null;
  }
  return (
    <ErrorBoundary>
      {children}

      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setSubscribeOpen(false)}>
        <h1
          style={{
            margin: '0 32px 12px',
            textAlign: 'center',
            color: colors.secondary,
          }}>
          {'Before you go...'}
        </h1>
        <h3 style={{ margin: '0 32px 12px', textAlign: 'center' }}>
          {'Do you want to stay updated on new additions?'}
        </h3>
      </SubscribeModal>
    </ErrorBoundary>
  );
};
