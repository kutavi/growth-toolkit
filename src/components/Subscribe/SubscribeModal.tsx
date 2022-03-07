import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  'https://07667286.sibforms.com/serve/MUIEALnt-cZuXJTOxnRy38r1d0MrPQeGgNZQ9ii16WXexDVd-pcp6lYE3x7NCW7idBzSzk4QhYJhZlPk-Nvr05g7400mqSYbTAUTOA3IDNu7t8vGvBTGpz3Il4m1nCNtcy08NETqSQFrKr5O66BzlNlGPSRICoWHln2qHsxF4vmZK6rUFahc221GyhudBQKnLY8B3P_fjX4OaDCf';

const SubscribeModal = ({ isOpen, onClose, children }: SubscribeModalProps) => (
  <Modal
    isShown={isOpen}
    className={styles.modal}
    onClose={() => {
      onClose();
      track('Closed subscribe');
    }}>
    {children}
    <iframe
      width='650'
      height='560'
      src={iframeSrc}
      id='form-iframe'
      frameBorder='0'
      scrolling='auto'
      allowFullScreen
      style={{
        borderRadius: '4px',
        display: 'block',
        maxWidth: '100%',
      }}></iframe>
  </Modal>
);
export default SubscribeModal;
