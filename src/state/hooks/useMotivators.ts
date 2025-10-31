import { motivators } from '../../utils/configs';
import { useMotivatorsContext, Card } from '../context/AppContext';

export const useMotivators = () => {
  const { state, setState } = useMotivatorsContext();

  const cardsFromState = state.cards;
  const cardIds = cardsFromState.map(c => c.id);
  const sortedCards = motivators
    .slice()
    .sort((a, b) => cardIds.indexOf(a.id) - cardIds.indexOf(b.id));
  const cards = sortedCards.map(c => {
    const savedCard = cardsFromState.find(cd => c.id === cd.id);
    return {
      ...c,
      ...(savedCard ? savedCard : { selection: 0 }),
    };
  });

  const updateCards = (newCards: (Record<string, unknown> & Card)[]) => {
    const cardsForState = newCards.map(c => ({
      id: c.id,
      selection: c.selection,
    }));
    setState({ cards: cardsForState });
  };

  return {
    cards,
    updateCards,
  };
};
