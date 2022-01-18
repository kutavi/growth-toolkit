import { motivators } from '../../utils/configs';
import { CARDS_STATE } from '../types/types';

export interface MotivatorsState {
  cards: any[];
}

export const initialState = {
  cards: motivators,
};

interface Action {
  type?: string;
  payload?: any;
}

const reducer = (
  state: MotivatorsState = initialState,
  action: Action = {}
): MotivatorsState => {
  const { type, payload } = action;

  switch (type) {
    case CARDS_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
