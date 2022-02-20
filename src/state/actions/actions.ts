import { MotivatorsState } from '../reducers/motivators';
import { ResilienceState } from '../reducers/resilience';
import { SettingsState } from '../reducers/settings';
import { WheelOfLifeState } from '../reducers/wheelOfLife';
import {
  MOTIVATORS_STATE,
  RESILIENCE_STATE,
  SETTINGS_STATE,
  WHEEL_STATE,
} from '../types/types';
export const updateMotivators = (cards: Partial<MotivatorsState>) => ({
  type: MOTIVATORS_STATE,
  payload: cards,
});

export const updateSettings = (newSettings: Partial<SettingsState>) => ({
  type: SETTINGS_STATE,
  payload: newSettings,
});

export const updateWheel = (wheelOfLife: Partial<WheelOfLifeState>) => ({
  type: WHEEL_STATE,
  payload: wheelOfLife,
});

export const updateResilience = (resilience: Partial<ResilienceState>) => ({
  type: RESILIENCE_STATE,
  payload: resilience,
});
