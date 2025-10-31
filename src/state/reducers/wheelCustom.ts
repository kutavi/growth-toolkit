import { WHEEL_CUSTOM_STATE } from '../actions/types';
import { Category } from '../types/wheel';

interface CustomCategory extends Category {
  name: string;
}

export interface WheelCustomState {
  categories: CustomCategory[];
}

export const initialState = {
  categories: [] as CustomCategory[],
};

interface Action {
  type?: string;
  payload?: Partial<WheelCustomState>;
}

const reducer = (
  state: WheelCustomState = initialState,
  action: Action = {}
): WheelCustomState => {
  const { type, payload } = action;

  switch (type) {
    case WHEEL_CUSTOM_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
