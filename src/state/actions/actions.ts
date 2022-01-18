import { SettingsState } from '../reducers/settings';
import { CARDS_STATE, SETTINGS_STATE } from '../types/types';
export const updateCards = (cards: []) => ({
  type: CARDS_STATE,
  payload: { cards },
});

export const updateSettings = (newSettings: Partial<SettingsState>) => ({
  type: SETTINGS_STATE,
  payload: newSettings,
});

export const actions = {
  updateCards,
};
