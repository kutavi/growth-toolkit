const STORAGE_KEY = 'growth-toolkit';

export interface GrowthToolkitData {
  motivators?: any;
  settings?: any;
  wheelOfLife?: any;
  wheelCustom?: any;
  resilience?: any;
  savedWheels?: any;
  lastViewingWheel?: any;
}

const getAllData = (): GrowthToolkitData => {
  if (typeof window === 'undefined') return {};
  try {
    const data = window.localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.warn('Error reading from localStorage:', error);
    return {};
  }
};

const saveAllData = (data: GrowthToolkitData): void => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Error saving to localStorage:', error);
  }
};

export const getStorageItem = <T>(
  key: keyof GrowthToolkitData,
  defaultValue: T
): T => {
  const allData = getAllData();
  return (allData[key] as T) ?? defaultValue;
};

export const setStorageItem = <T>(
  key: keyof GrowthToolkitData,
  value: T
): void => {
  const allData = getAllData();
  allData[key] = value;
  saveAllData(allData);
};
