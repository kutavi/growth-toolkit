import { MotivatorsState } from '../reducers/motivators';
import { SettingsState } from '../reducers/settings';
import { WheelOfLifeState } from '../reducers/wheelOfLife';
import { CARDS_STATE, SETTINGS_STATE, WHEEL_STATE } from '../types/types';
export const updateCards = (cards: Partial<MotivatorsState>) => ({
  type: CARDS_STATE,
  payload: { cards },
});

export const updateSettings = (newSettings: Partial<SettingsState>) => ({
  type: SETTINGS_STATE,
  payload: newSettings,
});

export const updateWheel = (wheelOfLife: Partial<WheelOfLifeState>) => ({
  type: WHEEL_STATE,
  payload: wheelOfLife,
});

export const actions = {
  updateCards,
};
