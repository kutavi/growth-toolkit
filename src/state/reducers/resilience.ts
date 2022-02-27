import { resilience } from '../../utils/configs';
import { RESILIENCE_STATE } from '../actions/types';

export type Question = {
  id: number;
  answer: number;
};
export interface ResilienceState {
  questions: Question[];
}

export const initialState = {
  questions: resilience.map(question => ({ id: question.id, answer: 0 })),
};

interface Action {
  type?: string;
  payload: Partial<ResilienceState>;
}

const reducer = (
  state: ResilienceState = initialState,
  action: Action = { payload: {} }
): ResilienceState => {
  const { type, payload } = action;

  switch (type) {
    case RESILIENCE_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
