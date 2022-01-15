import { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Layout } from '../../components/Layout/Layout';
import { Motivator } from '../../components/Motivator/Motivator';
import { Popover } from '../../components/Popover/Popover';
import { motivators, texts } from '../../model/configs';
import { reorderArray } from '../../model/helpers';

const Home = () => {
  const [cards, setCards] = useState(motivators);

  const reorder = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards(reorderArray(cards, dragIndex, hoverIndex));
    },
    [cards]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Popover
        isShown
        title={texts.motivators.title}
        description={texts.motivators.info}
      />
      <Layout>
        {cards.map((motivator, index) => (
          <Motivator
            reorder={reorder}
            examples={motivator.examples}
            key={motivator.name}
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
