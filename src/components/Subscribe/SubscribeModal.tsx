import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  'https://07667286.sibforms.com/serve/MUIEAAXOgVgo7RbLPVoegc8a3g6rC7k8ZJr_HSkFREM_YLWcAxZGEGVcPE4uRIwZ9HMgARs_O5hl0fXDe71NvVq32oMamWmM3yfZpTEec0fEMxc_fSqnyj-BHZbhlLJf_YsqLPm4ZeL515gnXjNjQZRxZDP52mOH8QbK_XJWUJnV6I1e6LHum_GUPgQfMlGyzYj5bOtSQX_S5AKM';

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
