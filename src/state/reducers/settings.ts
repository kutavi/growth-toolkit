import { SETTINGS_STATE } from '../types/types';

export interface SettingsState {
  isNavigationOpen: boolean;
  isMotivatorsInfoOpen: boolean;
}

const availableSpaceBreakpoint = 1450;
export const initialState = {
  isNavigationOpen:
    typeof window !== 'undefined' &&
    window.innerWidth >= availableSpaceBreakpoint,
  isMotivatorsInfoOpen:
    typeof window !== 'undefined' &&
    window.innerWidth >= availableSpaceBreakpoint,
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
