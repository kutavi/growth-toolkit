import { combineReducers } from 'redux';
import motivatorsReducer, { MotivatorsState } from './motivators';
import settingsReducer, { SettingsState } from './settings';
export default combineReducers({
  motivators: motivatorsReducer,
  settings: settingsReducer,
});

export interface Store {
  motivators: MotivatorsState;
  settings: SettingsState;
}
