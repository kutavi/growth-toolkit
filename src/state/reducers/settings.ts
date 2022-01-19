import { SETTINGS_STATE } from '../types/types';

export interface SettingsState {
  isNavigationOpen: boolean;
  isMotivatorsInfoOpen: boolean;
  isWheelInfoOpen: boolean;
}

const availableSpaceBreakpoint = 1620;

const hasAvailableSpace =
  typeof window !== 'undefined' &&
  window.innerWidth >= availableSpaceBreakpoint;
export const initialState = {
  isNavigationOpen: hasAvailableSpace,
  isMotivatorsInfoOpen: hasAvailableSpace,
  isWheelInfoOpen: hasAvailableSpace,
};

interface Action {
  type?: string;
  payload?: any;
}

const reducer = (
  state: SettingsState = initialState,
  action: Action = {}
): SettingsState => {
  const { type, payload } = action;

  switch (type) {
    case SETTINGS_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
