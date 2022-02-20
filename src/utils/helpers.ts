export const reorderArray = (arr: any[], from: number, to: number): any[] =>
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
  }, []);

export const windowLoaded = () => typeof window !== 'undefined';
export const isTouchDevice = () =>
  (windowLoaded() && 'ontouchstart' in window) ||
  (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);

type Properties = {
  value: string | number;
};
export const track = (name: string, properties?: Properties) =>
  windowLoaded() && (window as any).splitbee?.track(name, properties);
