import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { motivators, wheelOfLife, resilience } from '../../utils/configs';
import { Category } from '../types/wheel';

// Types
export type Card = {
  id: number;
  selection: number;
};

export type Question = {
  id: number;
  answer: number;
};

export interface CustomCategory extends Category {
  name: string;
}

export interface MotivatorsState {
  cards: Card[];
}

export interface SettingsState {
  isNavigationOpen?: boolean;
  isMotivatorsInfoOpen?: boolean;
  isWheelInfoOpen?: boolean;
  isResilienceInfoOpen?: boolean;
  newsletterPromptTriggered: boolean;
}

export interface WheelOfLifeState {
  categories: Category[];
}

export interface WheelCustomState {
  categories: CustomCategory[];
}

export interface ResilienceState {
  questions: Question[];
}

// Initial states
const initialMotivatorsState: MotivatorsState = {
  cards: motivators.map(m => ({ id: m.id, selection: 0 })),
};

const initialSettingsState: SettingsState = {
  isNavigationOpen: undefined,
  isMotivatorsInfoOpen: undefined,
  isWheelInfoOpen: undefined,
  isResilienceInfoOpen: undefined,
  newsletterPromptTriggered: false,
};

const initialWheelOfLifeState: WheelOfLifeState = {
  categories: wheelOfLife.map(category => ({
    id: category.id,
    current: 0,
    ideal: 0,
  })),
};

const initialWheelCustomState: WheelCustomState = {
  categories: [] as CustomCategory[],
};

const initialResilienceState: ResilienceState = {
  questions: resilience.map(question => ({ id: question.id, answer: 0 })),
};

// Context types
type MotivatorsContextType = {
  state: MotivatorsState;
  setState: (state: Partial<MotivatorsState>) => void;
};

type SettingsContextType = {
  state: SettingsState;
  setState: (state: Partial<SettingsState>) => void;
};

type WheelOfLifeContextType = {
  state: WheelOfLifeState;
  setState: (state: Partial<WheelOfLifeState>) => void;
};

type WheelCustomContextType = {
  state: WheelCustomState;
  setState: (state: Partial<WheelCustomState>) => void;
};

type ResilienceContextType = {
  state: ResilienceState;
  setState: (state: Partial<ResilienceState>) => void;
};

// Create contexts
const MotivatorsContext = createContext<MotivatorsContextType | undefined>(undefined);
const SettingsContext = createContext<SettingsContextType | undefined>(undefined);
const WheelOfLifeContext = createContext<WheelOfLifeContextType | undefined>(undefined);
const WheelCustomContext = createContext<WheelCustomContextType | undefined>(undefined);
const ResilienceContext = createContext<ResilienceContextType | undefined>(undefined);

// Hook exports
export const useMotivatorsContext = () => {
  const context = useContext(MotivatorsContext);
  if (!context) {
    throw new Error('useMotivatorsContext must be used within AppProvider');
  }
  return context;
};

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within AppProvider');
  }
  return context;
};

export const useWheelOfLifeContext = () => {
  const context = useContext(WheelOfLifeContext);
  if (!context) {
    throw new Error('useWheelOfLifeContext must be used within AppProvider');
  }
  return context;
};

export const useWheelCustomContext = () => {
  const context = useContext(WheelCustomContext);
  if (!context) {
    throw new Error('useWheelCustomContext must be used within AppProvider');
  }
  return context;
};

export const useResilienceContext = () => {
  const context = useContext(ResilienceContext);
  if (!context) {
    throw new Error('useResilienceContext must be used within AppProvider');
  }
  return context;
};

// Helper function to load from localStorage
const loadFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error loading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

// Helper function to save to localStorage
const saveToLocalStorage = <T,>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error saving ${key} to localStorage:`, error);
  }
};

// Main App Provider
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  // Load initial state from localStorage
  const [motivatorsState, setMotivatorsState] = useState<MotivatorsState>(() =>
    loadFromLocalStorage('motivators', initialMotivatorsState)
  );
  const [settingsState, setSettingsState] = useState<SettingsState>(() =>
    loadFromLocalStorage('settings', initialSettingsState)
  );
  const [wheelOfLifeState, setWheelOfLifeState] = useState<WheelOfLifeState>(() =>
    loadFromLocalStorage('wheelOfLife', initialWheelOfLifeState)
  );
  const [wheelCustomState, setWheelCustomState] = useState<WheelCustomState>(() =>
    loadFromLocalStorage('wheelCustom', initialWheelCustomState)
  );
  const [resilienceState, setResilienceState] = useState<ResilienceState>(() =>
    loadFromLocalStorage('resilience', initialResilienceState)
  );

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToLocalStorage('motivators', motivatorsState);
  }, [motivatorsState]);

  useEffect(() => {
    saveToLocalStorage('settings', settingsState);
  }, [settingsState]);

  useEffect(() => {
    saveToLocalStorage('wheelOfLife', wheelOfLifeState);
  }, [wheelOfLifeState]);

  useEffect(() => {
    saveToLocalStorage('wheelCustom', wheelCustomState);
  }, [wheelCustomState]);

  useEffect(() => {
    saveToLocalStorage('resilience', resilienceState);
  }, [resilienceState]);

  // Update functions
  const updateMotivatorsState = (updates: Partial<MotivatorsState>) => {
    setMotivatorsState(prev => ({ ...prev, ...updates }));
  };

  const updateSettingsState = (updates: Partial<SettingsState>) => {
    setSettingsState(prev => ({ ...prev, ...updates }));
  };

  const updateWheelOfLifeState = (updates: Partial<WheelOfLifeState>) => {
    setWheelOfLifeState(prev => ({ ...prev, ...updates }));
  };

  const updateWheelCustomState = (updates: Partial<WheelCustomState>) => {
    setWheelCustomState(prev => ({ ...prev, ...updates }));
  };

  const updateResilienceState = (updates: Partial<ResilienceState>) => {
    setResilienceState(prev => ({ ...prev, ...updates }));
  };

  return (
    <MotivatorsContext.Provider
      value={{ state: motivatorsState, setState: updateMotivatorsState }}
    >
      <SettingsContext.Provider
        value={{ state: settingsState, setState: updateSettingsState }}
      >
        <WheelOfLifeContext.Provider
          value={{ state: wheelOfLifeState, setState: updateWheelOfLifeState }}
        >
          <WheelCustomContext.Provider
            value={{ state: wheelCustomState, setState: updateWheelCustomState }}
          >
            <ResilienceContext.Provider
              value={{ state: resilienceState, setState: updateResilienceState }}
            >
              {children}
            </ResilienceContext.Provider>
          </WheelCustomContext.Provider>
        </WheelOfLifeContext.Provider>
      </SettingsContext.Provider>
    </MotivatorsContext.Provider>
  );
};
