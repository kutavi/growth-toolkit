import { useEffect, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

interface AppProps {
  children: any;
}
export const App = ({ children }: AppProps) => {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!hasLoaded) {
    return null;
  }
  return <ErrorBoundary>{children}</ErrorBoundary>;
};
