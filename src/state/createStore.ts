import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import combinedReducers, { Store } from './reducers/root';

import '../styles/core.scss';

const savedStates = ['motivators', 'settings'];
export default (preloadedState: Store) => {
  const store = createStore(
    combinedReducers,
    getLoadedState(preloadedState),
    composeWithDevTools(applyMiddleware(save({ states: savedStates })))
  );
  return store;
};

const getLoadedState = (preloadedState: Store) => {
  if (typeof window !== 'undefined')
    return {
      ...preloadedState,
      ...load({ states: savedStates, disableWarnings: true }),
    };

  return {
    ...preloadedState,
  };
};
