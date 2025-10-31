import { wheelOfLife } from '../../utils/configs';
import { WHEEL_STATE } from '../actions/types';
import { Category } from '../types/wheel';

export interface WheelOfLifeState {
  categories: Category[];
}

export const initialState = {
  categories: wheelOfLife.map(category => ({
    id: category.id,
    current: 0,
    ideal: 0,
  })),
};

interface Action {
  type?: string;
  payload?: Partial<WheelOfLifeState>;
}

const reducer = (
  state: WheelOfLifeState = initialState,
  action: Action = {}
): WheelOfLifeState => {
  const { type, payload } = action;

  switch (type) {
    case WHEEL_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
