import { wheelOfLife } from '../../utils/configs';
import { WHEEL_STATE } from '../types/types';

export enum WheelValues {
  current = 'current',
  ideal = 'ideal',
}

type CategoryValues = {
  [key in WheelValues]: number;
};

export interface Category extends CategoryValues {
  id: number;
}

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
  payload?: any;
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
