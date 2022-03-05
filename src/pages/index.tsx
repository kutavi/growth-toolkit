import { useState } from 'react';
import ActivityCards from '../components/ActivityCards/ActivityCards';
import { SEO } from '../components/Seo/Seo';
import { IconButton } from '../library/IconButton/IconButton';
import Modal from '../library/Modal/Modal';
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
      <IconButton type='circle' icon='question' onClick={() => setModalOpen(true)} className={styles.creditsBtn} />
      <Modal isShown={isModalOpen} title={'About'} onClose={() => setModalOpen(false)}>
        <div>
          <h3>{'Credits'}</h3>
          <ul>
            <li>Site's favicon - Leaf icon - <a target="_blank" href="https://www.flaticon.com/authors/roundicons" title="leaf icon">created by Roundicons - Flaticon</a></li>
            <li>Moving motivators images and concept created by{' '}
            <a target="_blank" href='https://management30.com/practice/moving-motivators/' title="management 3.0 moving motivators">management 3.0, Jurgen Appelo</a>
            </li>
          </ul>
          <h3>{'About this project'}</h3>
          <ul>
            <li>This project is open source! Check it out on{' '}
              <a target="_blank" href='https://github.com/kutavi/growth-toolkit'>{'Github'}</a>
            </li>
          </ul>

        </div>
      </Modal>
    </div>
  </>
);

  }
export default Home;
