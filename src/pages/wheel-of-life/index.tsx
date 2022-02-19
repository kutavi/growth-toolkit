import { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { SEO } from '../../components/Seo/Seo';
import { WheelView } from '../../components/Wheel/Wheel';
import { Button } from '../../library/Button/Button';
import { Popover } from '../../library/Popover/Popover';
import { useSettings } from '../../state/hooks/useSettings';
import { useWheelOfLife } from '../../state/hooks/useWheelOfLife';
import { WheelValues } from '../../state/reducers/wheelOfLife';
import { texts } from '../../utils/configs';
import * as styles from '../Page.module.scss';

const selections = WheelValues;

const Home = () => {
  const { isWheelInfoOpen, updateSettings } = useSettings();
  const { categories: wheelData, updateCategories } = useWheelOfLife();
  const [selection, updateSelection] = useState(selections.current);

  const getCurrentColor = (opacity: string = '50%') =>
    selection === selections.current
      ? `rgb(191 0 0 / ${opacity})`
      : 'rgb(191 0 0 / 35%)';
  const getIdealColor = (opacity: string = '50%') =>
    selection === selections.ideal
      ? `rgb(0 8 137 / ${opacity})`
      : 'rgb(77 88 251 / 33%)';

  const highestScore = 10;

  return (
    <>
      <SEO
        title={texts.wheelOfLife.title}
        description={texts.wheelOfLife.description}
      />
      <Layout>
        <Popover
          isShown={isWheelInfoOpen}
          toggle={value => updateSettings({ isWheelInfoOpen: value })}
          position={'top-left'}
          buttonIcon={'help'}
          title={texts.wheelOfLife.title}>
          {texts.wheelOfLife.info}
        </Popover>
        <div className={styles.buttons}>
          <div className={styles.title}>{'Pick one:'}</div>
          <Button
            label={'Current life'}
            style={{ backgroundColor: getCurrentColor('78%') }}
            onClick={() => updateSelection(selections.current)}
          />
          <Button
            label={'Ideal life'}
            style={{ backgroundColor: getIdealColor('78%') }}
            onClick={() => updateSelection(selections.ideal)}
          />
        </div>
        <div className={styles.chartContainer}>
          <WheelView
            chartToEdit={selection}
            maxPoints={highestScore}
            datasetLabels={wheelData.map(category => category.name)}
            datasets={[
              {
                label: 'Current life',
                id: selections.current,
                data: wheelData.map(category => category.current),
                backgroundColor: getCurrentColor(),
                borderColor: 'white',
                borderWidth: 1,
              },
              {
                label: 'Where I want to be',
                id: selections.ideal,
                data: wheelData.map(category => category.ideal),
                backgroundColor: getIdealColor(),
                borderColor: 'white',
                borderWidth: 1,
              },
            ]}
            updateDataset={(chartToEdit, category, score) => {
              const categories = wheelData.map(c =>
                c.name === category ? { ...c, [chartToEdit]: score } : c
              );
              updateCategories(categories);
            }}
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
