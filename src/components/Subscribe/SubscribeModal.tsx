import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  'https://07667286.sibforms.com/serve/MUIEAN0wqLSurD0LStAJGKPhBplnJ7ug3JvkzBjTTz30IwQwkFYHAGk4G30iQD2dxOsditge7KhYPkeLo9yRhIzhyszz8LXEuBMBk_ky6ejSPRSoQcad_b5_0zGMcLtNW1_ajp-ORetwskaKzonz9Jc078ThX_ne6_9ZtQvmMxrwkoAJGFE2HQbC-OdQzG9j-A0yhxQLDyhLLqDe';

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
