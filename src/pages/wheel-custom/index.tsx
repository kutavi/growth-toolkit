import { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { SEO } from '../../components/Seo/Seo';
import { WheelView } from '../../components/Wheel/Wheel';
import { Button } from '../../library/Button/Button';
import { MultiSelect } from '../../library/MultiSelect/MultiSelect';
import { Popover } from '../../library/Popover/Popover';
import { useSettings } from '../../state/hooks/useSettings';
import { useWheelCustom } from '../../state/hooks/useWheelCustom';
import { WheelValues } from '../../state/types/wheel';
import { texts, wheelAreas } from '../../utils/configs';
import { track } from '../../utils/helpers';
import * as styles from '../Page.module.scss';

const selections = WheelValues;

const Home = () => {
  const { isWheelInfoOpen, updateSettings } = useSettings();
  const { categories: wheelData, updateCategories } = useWheelCustom();
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
        title={texts.wheelCustom.title}
        description={texts.wheelCustom.description}
      />
      <Layout>
        <Popover
          isShown={isWheelInfoOpen}
          toggle={value => {
            track(`${value ? 'Opened' : 'Closed'} custom wheel info`);
            updateSettings({ isWheelInfoOpen: value });
          }}
          position={'top-left'}
          buttonIcon={'help'}
          title={texts.wheelCustom.title}>
          {texts.wheelCustom.info}
        </Popover>
        <div className={styles.toolArea}>
          <div className={styles.select}>
            <MultiSelect
              placeholder={'Pick the areas of focus or create your own...'}
              options={wheelAreas}
              closeMenuOnSelect={false}
              value={wheelData.map(d => ({ label: d.name, value: d.id }))}
              onSelect={(options, params) => {
                if (params?.action === 'select-option') {
                  const newOption = params.option || { label: '', value: '' };
                  track('Added area to wheel', {
                    value: `${newOption.value} - ${newOption.label}`,
                  });
                }
                if (params?.action === 'remove-value') {
                  const removed = params.removedValue;
                  track('Removed area from wheel', {
                    value: `${removed.value} - ${removed.label}`,
                  });
                }
                updateCategories(
                  options.map(s => ({ id: s.value, name: s.label }))
                );
              }}
            />
          </div>
          <div className={styles.buttons}>
            <div className={styles.title}>{'Pick one:'}</div>
            <Button
              size={'sm'}
              style={{ backgroundColor: getCurrentColor('78%') }}
              onClick={() => {
                track('Select current - custom');
                updateSelection(selections.current);
              }}>
              {'Current life'}
            </Button>
            <Button
              size={'sm'}
              style={{ backgroundColor: getIdealColor('78%') }}
              onClick={() => {
                track('Select ideal - custom');
                updateSelection(selections.ideal);
              }}>
              {'Ideal life'}
            </Button>
          </div>
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
              track('Update wheel');
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
