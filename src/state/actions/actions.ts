import { CARDS_STATE } from '../types/types';
export const updateCards = (cards: []) => ({
  type: CARDS_STATE,
  payload: { cards },
});

export const actions = {
  updateCards,
};
