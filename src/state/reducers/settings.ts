import { SETTINGS_STATE } from '../actions/types';

export interface SettingsState {
  isNavigationOpen?: boolean;
  isMotivatorsInfoOpen?: boolean;
  isWheelInfoOpen?: boolean;
  isResilienceInfoOpen?: boolean;
  newsletterPromptTriggered: boolean;
}

export const initialState = {
  isNavigationOpen: undefined,
  isMotivatorsInfoOpen: undefined,
  isWheelInfoOpen: undefined,
  isResilienceInfoOpen: undefined,
  newsletterPromptTriggered: false,
};

interface Action {
  type?: string;
  payload?: Partial<SettingsState>;
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
