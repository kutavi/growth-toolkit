import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Motivator } from '../../components/Motivator/Motivator';
import { Popover } from '../../library/Popover/Popover';
import { useMotivators } from '../../state/hooks/useMotivators';
import { useSettings } from '../../state/hooks/useSettings';
import { texts } from '../../utils/configs';

const HealthCheck = () => {
  const { updateCards, cards } = useMotivators();
  const { isMotivatorsInfoOpen, updateSettings } = useSettings();

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const makeSelection = (id: number, selection: number) => {
    updateCards(
      cards.map(c =>
        c.id === id
          ? { ...c, selection: c.selection === selection ? 0 : selection }
          : c
      )
    );
  };

  return (
    <>
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
            examples={motivator.examples}
            selections={[
              { label: 'Yes', value: 1 },
              { label: 'No', value: -1 },
            ]}
            makeSelection={selection => makeSelection(motivator.id, selection)}
            currentSelection={motivator.selection}
            index={index}
            color={motivator.color}
            icon={motivator.icon}
            name={motivator.name}
            description={motivator.description}
          />
        ))}
      </Layout>
    </>
  );
};

export default HealthCheck;
