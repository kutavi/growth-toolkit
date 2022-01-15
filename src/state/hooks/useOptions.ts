import { useDispatch, useSelector } from 'react-redux';
import { updateCards as updateCardsAction } from '../actions/actions';
import { State } from '../createStore';

export const useMotivators = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: State) => state.motivators.cards);

  const updateCards = (newCards: []) => {
    dispatch(updateCardsAction(newCards));
  };

  return {
    cards,
    updateCards,
  };
};
