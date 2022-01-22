import { motivators } from '../../utils/configs';
import { MOTIVATORS_STATE } from '../types/types';

export type Card = {
  id: number;
  selection: number;
};
export interface MotivatorsState {
  cards: Card[];
}

export const initialState = {
  cards: motivators.map(m => ({ id: m.id, selection: 0 })),
};

interface Action {
  type?: string;
  payload: Partial<MotivatorsState>;
}

const reducer = (
  state: MotivatorsState = initialState,
  action: Action = { payload: {} }
): MotivatorsState => {
  const { type, payload } = action;

  switch (type) {
    case MOTIVATORS_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
