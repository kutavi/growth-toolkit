import { useDispatch, useSelector } from 'react-redux';
import { motivators } from '../../utils/configs';
import { updateMotivators as updateMotivatorsAction } from '../actions/actions';
import { Card } from '../reducers/motivators';
import { Store } from '../reducers/root';

export const useMotivators = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state: Store) => {
    const cardsFromState = state.motivators.cards;
    const cardIds = cardsFromState.map(c => c.id);
    const sortedCards = motivators
      .slice()
      .sort((a, b) => cardIds.indexOf(a.id) - cardIds.indexOf(b.id));
    return sortedCards.map(c => {
      const savedCard = cardsFromState.find(cd => c.id === cd.id);
      return {
        ...c,
        ...(savedCard ? savedCard : { selection: 0 }),
      };
    });
  });

  const updateCards = (newCards: ({ [key: string]: any } & Card)[]) => {
    const cardsForState = newCards.map(c => ({
      id: c.id,
      selection: c.selection,
    }));
    dispatch(updateMotivatorsAction({ cards: cardsForState }));
  };

  return {
    cards,
    updateCards,
  };
};
