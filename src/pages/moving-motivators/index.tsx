import { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Layout } from '../../components/Layout/Layout';
import { Motivator } from '../../components/Motivator/Motivator';
import { SEO } from '../../components/Seo/Seo';
import { Popover } from '../../library/Popover/Popover';
import { useMotivators } from '../../state/hooks/useMotivators';
import { useSettings } from '../../state/hooks/useSettings';
import { texts } from '../../utils/configs';
import { isTouchDevice, reorderArray, track } from '../../utils/helpers';

const Home = () => {
  const { updateCards, cards: stateCards } = useMotivators();
  const { isMotivatorsInfoOpen, updateSettings } = useSettings();
  const [cards, setCards] = useState(stateCards);

  const reorder = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      track('Reorder motivator');
      setCards(reorderArray(cards, dragIndex, hoverIndex));
      updateCards(reorderArray(cards, dragIndex, hoverIndex));
    },
    [cards]
  );

  return (
    <>
      <SEO
        title={texts.motivators.title}
        description={texts.motivators.description}
      />
      <Layout>
        <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
          <Popover
            isShown={isMotivatorsInfoOpen}
            toggle={value => {
              track(`${value ? 'Opened' : 'Closed'} motivators info`);
              updateSettings({ isMotivatorsInfoOpen: value });
            }}
            position={'topLeft'}
            buttonIcon={'help'}
            title={texts.motivators.title}>
            {texts.motivators.info}
          </Popover>
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
        </DndProvider>
      </Layout>
    </>
  );
};

export default Home;
