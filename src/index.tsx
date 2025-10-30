import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './state/context/AppContext';
import { App } from './app';
import { Loader } from './library/Loader/Loader';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./pages/index'));
const MovingMotivators = lazy(() => import('./pages/moving-motivators/index'));
const MovingMotivatorsHealthCheck = lazy(() => import('./pages/moving-motivators/health-check'));
const ResilienceScale = lazy(() => import('./pages/resilience-scale/index'));
const WheelOfLife = lazy(() => import('./pages/wheel-of-life/index'));
const WheelCustom = lazy(() => import('./pages/wheel-custom/index'));
const NotFound = lazy(() => import('./pages/404'));

const root = createRoot(document.getElementById('root')!);

root.render(
  <AppProvider>
    <BrowserRouter>
      <App>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moving-motivators" element={<MovingMotivators />} />
            <Route
              path="/moving-motivators/health-check"
              element={<MovingMotivatorsHealthCheck />}
            />
            <Route path="/resilience-scale" element={<ResilienceScale />} />
            <Route path="/wheel-of-life" element={<WheelOfLife />} />
            <Route path="/wheel-custom" element={<WheelCustom />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </App>
    </BrowserRouter>
  </AppProvider>
);
