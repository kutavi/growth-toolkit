import { Layout } from '../../components/Layout/Layout';
import { Motivator } from '../../components/Motivator/Motivator';
import { SEO } from '../../components/Seo/Seo';
import { Popover } from '../../library/Popover/Popover';
import { useMotivators } from '../../state/hooks/useMotivators';
import { useSettings } from '../../state/hooks/useSettings';
import { texts } from '../../utils/configs';
import { track } from '../../utils/helpers';

const HealthCheck = () => {
  const { updateCards, cards } = useMotivators();
  const { isMotivatorsInfoOpen, updateSettings } = useSettings();

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
      <SEO
        title={texts.motivators.title}
        description={texts.motivators.description}
      />
      <Layout>
        <Popover
          isShown={isMotivatorsInfoOpen}
          toggle={value => {
            track(`${value ? 'Opened' : 'Closed'} motivators info`);
            updateSettings({ isMotivatorsInfoOpen: value });
          }}
          position={'topLeft'}
          buttonIcon={'help'}
          buttonLabel={'About'}
          title={texts.motivators.title}>
          {texts.motivators.info}
        </Popover>
        {cards.map((motivator, index) => (
          <Motivator
            key={motivator.id}
            id={motivator.id}
            examples={motivator.examples}
            selections={[
              { label: 'Yes', value: 1 },
              { label: 'No', value: -1 },
            ]}
            makeSelection={selection => {
              track('Clicked yes/no');
              makeSelection(motivator.id, selection);
            }}
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
