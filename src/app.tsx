import { useEffect, useState } from 'react';

interface AppProps {
    children: any
}
export const App = ({ children }: AppProps) => {
  const [hasLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!hasLoaded) {
    return null;
  }
  return children;
};
