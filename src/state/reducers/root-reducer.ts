import { combineReducers } from 'redux';
import stateReducer, { MotivatorsState } from './motivators';
export default combineReducers({
  motivators: stateReducer,
});

export interface Store {
  state: MotivatorsState;
}
