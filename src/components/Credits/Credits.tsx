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
          <div>
            <p>
              Created by{' '}
              <a
                onClick={() => track('Clicked website link')}
                target='_blank'
                href='https://kutavi.weebly.com/'
                rel='noreferrer'>
                {'Alexandra Tseniklidou'}
              </a>
              .
            </p>
          </div>
          <div>
            <p>
              This project&apos;s source code is on{' '}
              <a
                onClick={() => track('Clicked Github link')}
                target='_blank'
                href='https://github.com/kutavi/growth-toolkit'
                rel='noreferrer'>
                {'Github'}
              </a>
              .
            </p>
          </div>
          <div>
            <p>
              Have a tool you wish to see a digital version of or encountered
              any issues?
            </p>
            <p>
              You can contact me via the form{' '}
              <a
                target='_blank'
                href='https://kutavi.weebly.com/#contact'
                rel='noreferrer'>
                here
              </a>
              .
            </p>
          </div>
          <div>
            <p>
              <a
                onClick={() => track('Clicked Privacy Policy')}
                target='_blank'
                href='https://kutavi.weebly.com/privacy-policy'
                rel='noreferrer'>
                {'Privacy Policy'}
              </a>
            </p>
          </div>
          <h3>{'Credits'}</h3>
          <div onClick={() => track('Clicked credit links')}>
            <p>
              Site&apos;s favicon - Leaf icon -{' '}
              <a
                target='_blank'
                href='https://www.flaticon.com/authors/roundicons'
                title='leaf icon'
                rel='noreferrer'>
                created by Roundicons - Flaticon
              </a>
              .
            </p>
            <p>
              Moving motivators images and concept created by{' '}
              <a
                target='_blank'
                href='https://management30.com/practice/moving-motivators/'
                title='management 3.0 moving motivators'
                rel='noreferrer'>
                management 3.0, Jurgen Appelo
              </a>
              .
            </p>
          </div>
          <div className={styles.support}>
            <span>
              If you find this site useful, consider buying me a coffee ❤️
            </span>
            <a
              onClick={() => track('Buy Coffee')}
              href='https://www.buymeacoffee.com/kutavi'
              target={'_blank'}
              rel='noreferrer'>
              <img
                alt='Buy Me A Coffee'
                src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
              />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Credits;
