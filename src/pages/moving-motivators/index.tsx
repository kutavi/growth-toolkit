import { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Layout } from '../../components/Layout/Layout';
import { Motivator } from '../../components/Motivator/Motivator';
import { Popover } from '../../library/Popover/Popover';
import { useMotivators } from '../../state/hooks/useMotivators';
import { useSettings } from '../../state/hooks/useSettings';
import { texts } from '../../utils/configs';
import { isTouchDevice, reorderArray } from '../../utils/helpers';

const Home = () => {
  const { updateCards, cards: stateCards } = useMotivators();
  const { isMotivatorsInfoOpen, updateSettings } = useSettings();
  const [cards, setCards] = useState(stateCards);

  const reorder = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setCards(reorderArray(cards, dragIndex, hoverIndex));
      updateCards(reorderArray(cards, dragIndex, hoverIndex));
    },
    [cards]
  );

  return (
    <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
      <Popover
        isShown={isMotivatorsInfoOpen}
        toggle={value => updateSettings({ isMotivatorsInfoOpen: value })}
        position={'top-left'}
        buttonIcon={'help'}
        title={texts.motivators.title}>
        {texts.motivators.info}
      </Popover>
      <Layout>
        {cards.map((motivator, index) => (
          <Motivator
            key={motivator.id}
            id={motivator.id}
            reorder={reorder}
            examples={motivator.examples}
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
