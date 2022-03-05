import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import combinedReducers, { Store } from './reducers/root';

import '../styles/core.scss';
import { windowLoaded } from '../utils/helpers';

const savedStates = ['motivators', 'wheelOfLife', 'resilience', 'wheelCustom'];
export default (preloadedState: Store) => {
  const store = createStore(
    combinedReducers,
    getLoadedState(preloadedState),
    composeWithDevTools(applyMiddleware(save({ states: savedStates })))
  );
  return store;
};

const getLoadedState = (preloadedState: Store) => {
  if (windowLoaded())
    return {
      ...preloadedState,
      ...load({ states: savedStates, disableWarnings: true }),
    };

  return {
    ...preloadedState,
  };
};
