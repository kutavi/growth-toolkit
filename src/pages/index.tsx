import { useState } from 'react';
import ActivityCards from '../components/ActivityCards/ActivityCards';
import Credits from '../components/Credits/Credits';
import { SEO } from '../components/Seo/Seo';
import { IconButton } from '../library/IconButton/IconButton';
import Modal from '../library/Modal/Modal';
import { track } from '../utils/helpers';
import * as styles from './Page.module.scss';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <SEO />
      <div className={styles.container}>
        <h3>
          A toolkit with exercises and activities to help you on your personal
          development and growth.
        </h3>
        <ActivityCards />
        <IconButton
          type='circle'
          icon='question'
          onClick={() => {
            setModalOpen(true)
            track('Opened credits')
          }}
          className={styles.creditsBtn}
        />
        <Modal
          isShown={isModalOpen}
          title={'About'}
          onClose={() => setModalOpen(false)}>
          <Credits />
        </Modal>
      </div>
    </>
  );
};
export default Home;
