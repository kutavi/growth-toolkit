import { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { WheelView } from '../../components/Wheel/Wheel';
import { Button } from '../../library/Button/Button';
import { Popover } from '../../library/Popover/Popover';
import { useSettings } from '../../state/hooks/useSettings';
import { WheelValues } from '../../state/reducers/wheelOfLife';
import { texts } from '../../utils/configs';
import * as styles from '../Page.module.scss';

const selections = Object.values(WheelValues);

const Home = () => {
  const { isWheelInfoOpen, updateSettings} = useSettings();
  const [selection, updateSelection] = useState(selections[0]);
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
          <WheelView selectedChart={selection} />
          <div className={styles.buttons}>
            <div className={styles.title}>{'Pick one:'}</div>
            <Button
              label={'Current life'}
              className={`${styles.currentButton} ${selection === selections[0] ? styles.currentActive : ''}`}
              onClick={() => updateSelection(selections[0])}
            />
            <Button
              label={'Ideal life'}
              className={`${styles.idealButton} ${selection === selections[1] ? styles.idealActive : ''}`}
              onClick={() => updateSelection(selections[1])}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
