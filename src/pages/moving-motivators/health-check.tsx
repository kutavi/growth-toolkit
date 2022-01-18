import { Layout } from '../../components/Layout/Layout';
import { Motivator } from '../../components/Motivator/Motivator';
import { Popover } from '../../library/Popover/Popover';
import { useMotivators } from '../../state/hooks/useMotivators';
import { useSettings } from '../../state/hooks/useSettings';
import { texts } from '../../utils/configs';

const HealthCheck = () => {
  const { cards } = useMotivators();
  const { isMotivatorsInfoOpen, updateSettings } = useSettings();
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
            key={motivator.name}
            examples={motivator.examples}
            selections={[
              { label: 'Yes', value: 1 },
              { label: 'No', value: -1 },
            ]}
            id={motivator.name}
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
