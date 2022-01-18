import { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Layout } from '../../components/Layout/Layout';
import { Motivator } from '../../components/Motivator/Motivator';
import { Popover } from '../../library/Popover/Popover';
import { useMotivators } from '../../state/hooks/useOptions';
import { texts } from '../../utils/configs';
import { reorderArray } from '../../utils/helpers';

const Home = () => {
  const { updateCards, cards: stateCards } = useMotivators();
  const [cards, setCards] = useState(stateCards);

  const reorder = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards(reorderArray(cards, dragIndex, hoverIndex));
      updateCards(reorderArray(cards, dragIndex, hoverIndex));
    },
    [cards]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Popover
        position={'top-left'}
        buttonIcon={'help'}
        title={texts.motivators.title}>
        {texts.motivators.info}
      </Popover>
      <Layout>
        {cards.map((motivator, index) => (
          <Motivator
            key={motivator.name}
            reorder={reorder}
            examples={motivator.examples}
            id={motivator.name}
            index={index}
            color={motivator.color}
            icon={motivator.icon}
            name={motivator.name}
            description={motivator.description}
          />
        ))}
      </Layout>
    </DndProvider>
  );
};

export default Home;
