import { useDispatch, useSelector } from 'react-redux';
import { updateCards as updateCardsAction } from '../actions/actions';
import { Store } from '../reducers/root';

export const useMotivators = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: Store) => state.motivators.cards);

  const updateCards = (newCards: []) => {
    dispatch(updateCardsAction(newCards));
  };

  return {
    cards,
    updateCards,
  };
};
