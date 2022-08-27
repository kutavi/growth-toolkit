import { useState } from 'react';
import { IconButton } from '../../library/IconButton/IconButton';
import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Credits.module.scss';

const Credits = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <IconButton
        type='circle'
        icon='question'
        onClick={() => {
          setModalOpen(true);
          track('Opened credits');
        }}
        className={styles.button}
      />
      <Modal
        isShown={isModalOpen}
        title={'About'}
        onClose={() => {
          setModalOpen(false);
          track('Closed credits');
        }}>
        <div className={styles.wrapper}>
          <h3>{'Credits'}</h3>
          <div onClick={() => track('Clicked credit links')}>
            <p>
              Site's favicon - Leaf icon -{' '}
              <a
                target='_blank'
                href='https://www.flaticon.com/authors/roundicons'
                title='leaf icon'>
                created by Roundicons - Flaticon
              </a>
            </p>
            <p>
              Moving motivators images and concept created by{' '}
              <a
                target='_blank'
                href='https://management30.com/practice/moving-motivators/'
                title='management 3.0 moving motivators'>
                management 3.0, Jurgen Appelo
              </a>
            </p>
          </div>
          <h3>{'About this project'}</h3>
          <div>
            <p>
              This project is open source! Check it out on{' '}
              <a
                onClick={() => track('Clicked Github link')}
                target='_blank'
                href='https://github.com/kutavi/growth-toolkit'>
                {'Github'}
              </a>
            </p>
          </div>
          <div className={styles.support}>
            <span>
              If you find this site useful, consider buying me a coffee ❤️
            </span>
            <a
              onClick={() => track('Buy Coffee')}
              href='https://www.buymeacoffee.com/kutavi'
              target={'_blank'}>
              <img
                alt="Buy Me A Coffee"
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Credits;
