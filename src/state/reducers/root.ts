import { combineReducers } from 'redux';
import motivatorsReducer, { MotivatorsState } from './motivators';
import resilienceReducer, { ResilienceState } from './resilience';
import settingsReducer, { SettingsState } from './settings';
import wheelOfLifeReducer, { WheelOfLifeState } from './wheelOfLife';
export default combineReducers({
  motivators: motivatorsReducer,
  settings: settingsReducer,
  wheelOfLife: wheelOfLifeReducer,
  resilience: resilienceReducer,
});

export interface Store {
  motivators: MotivatorsState;
  settings: SettingsState;
  wheelOfLife: WheelOfLifeState;
  resilience: ResilienceState;
}
