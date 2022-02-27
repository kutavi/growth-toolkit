import { combineReducers } from 'redux';
import motivatorsReducer, { MotivatorsState } from './motivators';
import resilienceReducer, { ResilienceState } from './resilience';
import settingsReducer, { SettingsState } from './settings';
import wheelCustomReducer, { WheelCustomState } from './wheelCustom';
import wheelOfLifeReducer, { WheelOfLifeState } from './wheelOfLife';
export default combineReducers({
  motivators: motivatorsReducer,
  settings: settingsReducer,
  wheelOfLife: wheelOfLifeReducer,
  wheelCustom: wheelCustomReducer,
  resilience: resilienceReducer,
});

export interface Store {
  motivators: MotivatorsState;
  settings: SettingsState;
  wheelOfLife: WheelOfLifeState;
  wheelCustom: WheelCustomState;
  resilience: ResilienceState;
}
