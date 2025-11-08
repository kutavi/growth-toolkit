export const reorderArray = <T>(arr: T[], from: number, to: number): T[] =>
  arr.reduce((prev, current, idx, self) => {
    if (from === to) {
      prev.push(current);
    }
    if (idx === from) {
      return prev;
    }
    if (from < to) {
      prev.push(current);
    }
    if (idx === to) {
      prev.push(self[from]);
    }
    if (from > to) {
      prev.push(current);
    }
    return prev;
  }, [] as T[]);

export const windowLoaded = () => typeof window !== 'undefined';
export const isTouchDevice = () =>
  (windowLoaded() && 'ontouchstart' in window) ||
  (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);

export const isDev = (): boolean =>
  windowLoaded() && window.location.hostname === 'localhost';

type TrackProperties = {
  value: string | number;
};
declare global {
  interface Window {
    umami?: {
      track: (name: string, properties?: { value: string | number }) => void;
    };
  }
}
export const track = (name: string, properties?: TrackProperties) =>
  windowLoaded() && !isDev() && window.umami?.track(name, properties);

export const debounce = <T extends unknown[]>(
  func: (...args: T) => void,
  timeout = 300
) => {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
