import { combineReducers } from 'redux';
import stateReducer, { MotivatorsState } from './game';
export default combineReducers({
  motivators: stateReducer,
});

export interface Store {
  state: MotivatorsState;
}
