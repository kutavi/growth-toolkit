import { useState } from 'react';
import { Button } from '../../library/Button/Button';
import { CookieService } from '../../utils/cookie';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';
import SubscribeModal from './SubscribeModal';

const Subscribe = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.subscribe}>
      <Button
        type='primary'
        onClick={() => {
          setModalOpen(true);

          if (!CookieService.getCookie('exitIntentShown')) {
            CookieService.setCookie('exitIntentShown', 'true');
          }
          track('Opened subscribe');
        }}>
        {'SUBSCRIBE'}
      </Button>
      <span className={styles.prompt}>
        and know firsthand when something new is added.
      </span>
      <SubscribeModal
        onClose={() => setModalOpen(false)}
        isOpen={isModalOpen}
      />
    </div>
  );
};

export default Subscribe;
