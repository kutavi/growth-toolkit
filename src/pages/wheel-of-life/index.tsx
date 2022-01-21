import { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { WheelView } from '../../components/Wheel/Wheel';
import { Button } from '../../library/Button/Button';
import { Popover } from '../../library/Popover/Popover';
import { useSettings } from '../../state/hooks/useSettings';
import { useWheelOfLife } from '../../state/hooks/useWheelOfLife';
import { WheelValues } from '../../state/reducers/wheelOfLife';
import { texts } from '../../utils/configs';
import * as styles from '../Page.module.scss';

const selections = Object.values(WheelValues);

const Home = () => {
  const { isWheelInfoOpen, updateSettings } = useSettings();
  const { categories: wheelData, updateWheel } = useWheelOfLife();
  const [selection, updateSelection] = useState(selections[0]);
  
  const idealChartColor = selection === 'ideal' ? '#00088980' : '#000ffb54';
  const currentChartColor = selection === 'current' ? '#6a6a6abf' : '#959595bd';

  const highestScore = 10;

  return (
    <>
      <Popover
        isShown={isWheelInfoOpen}
        toggle={value => updateSettings({ isWheelInfoOpen: value })}
        position={'top-left'}
        buttonIcon={'help'}
        title={texts.wheelOfLife.title}>
        {texts.wheelOfLife.info}
      </Popover>
      <Layout>
        <div className={styles.chartContainer}>
          <WheelView
            chartToEdit={selection}
            maxPoints={highestScore}
            datasetLabels={wheelData.map(category => category.label)}
            datasets={[
              {
                label: 'Current state',
                id: selections[0],
                data: wheelData.map(category => category.current),
                backgroundColor: currentChartColor,
                borderColor: 'white',
                borderWidth: 1,
              },
              {
                label: 'Where I want to be',
                id: selections[1],
                data: wheelData.map(category => category.ideal),
                backgroundColor: idealChartColor,
                borderColor: 'white',
                borderWidth: 1,
              },
            ]}
            updateWheel={(chartToEdit, category, score) => {
              const categories = wheelData.map(c =>
                c.label === category ? { ...c, [chartToEdit]: score } : c
              );
              updateWheel({categories});
            }}
          />
          <div className={styles.buttons}>
            <div className={styles.title}>{'Pick one:'}</div>
            <Button
              label={'Current life'}
              className={`${styles.currentButton} ${
                selection === selections[0] ? styles.currentActive : ''
              }`}
              onClick={() => updateSelection(selections[0])}
            />
            <Button
              label={'Ideal life'}
              className={`${styles.idealButton} ${
                selection === selections[1] ? styles.idealActive : ''
              }`}
              onClick={() => updateSelection(selections[1])}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
