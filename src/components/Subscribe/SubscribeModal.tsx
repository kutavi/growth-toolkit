import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  'https://07667286.sibforms.com/serve/MUIEAJVkBZ2c0fkPS0mqFnprpq4SqhepudohwqnR4FYOLlonGbL0NzZpIR7unxFt2krm_QdyXx_Dm2_LH9pTznMauDbmY_g9vS_0HTRyRE7aWE6Tby-UShMADyQ4pgvzJxc-6TKfIyI2a5wEhwV47f8hoN3QkI5OFsrZtldbsi8WnVBBSSLkzdmCGVu6kvJJyX0OC95yZd_ww-WN';

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
