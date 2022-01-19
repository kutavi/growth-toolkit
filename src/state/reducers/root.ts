import { combineReducers } from 'redux';
import motivatorsReducer, { MotivatorsState } from './motivators';
import settingsReducer, { SettingsState } from './settings';
import wheelOfLifeReducer, { WheelOfLifeState } from './wheelOfLife';
export default combineReducers({
  motivators: motivatorsReducer,
  settings: settingsReducer,
  wheelOfLife: wheelOfLifeReducer,
});

export interface Store {
  motivators: MotivatorsState;
  settings: SettingsState;
  wheelOfLife: WheelOfLifeState;
}
