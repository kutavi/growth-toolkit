import { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Layout } from '../components/Layout/Layout';
import { Motivator } from '../components/Motivator/Motivator';
import { motivators } from '../model/configs';

const immutableReorder = (arr: any[], from: number, to: number) =>
  arr.reduce((prev, current, idx, self) => {
    if (from === to) {
      prev.push(current);
    }
    if (idx === from) {
      return prev;
    }
    if (from < to) {
      prev.push(current);
    }
    if (idx === to) {
      prev.push(self[from]);
    }
    if (from > to) {
      prev.push(current);
    }
    return prev;
  }, []);

const Home = () => {
  const [cards, setCards] = useState(motivators);

  const reorder = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards(immutableReorder(cards, dragIndex, hoverIndex));
    },
    [cards]
  );

  return (
    <DndProvider backend={HTML5Backend}>
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
