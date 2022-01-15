import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import combinedReducers from './reducers/root-reducer';

import '../styles/core.scss';
import { MotivatorsState } from './reducers/game';

export interface State {
  motivators: MotivatorsState;
}

export default (preloadedState: State) => {
  const store = createStore(
    combinedReducers,
    getLoadedState(preloadedState),
    composeWithDevTools(applyMiddleware(save({ states: ['motivators'] })))
  );
  return store;
};

const getLoadedState = (preloadedState: State) => {
  if (typeof window !== 'undefined')
    return {
      ...preloadedState,
      ...load({ states: ['motivators'], disableWarnings: true }),
    };

  return {
    ...preloadedState,
  };
};
