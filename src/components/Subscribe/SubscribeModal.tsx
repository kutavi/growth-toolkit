import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  process.env.SUBSCRIBE_FORM;

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
      height={'600'}
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
