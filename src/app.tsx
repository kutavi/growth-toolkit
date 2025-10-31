import { ReactNode, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import SubscribeModal from './components/Subscribe/SubscribeModal';
import * as colors from './styles/_base.module.scss';

import './styles/core.scss';

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);

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
