import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  'https://07667286.sibforms.com/serve/MUIEAApaEz0YxPovaoM1HngXOsGuFTAhOGjzrH7xdCtj0TYH9Kozmsn2n13oUUZxgeJGu3cIm-l955fWEtBOlq1KdYKWt3TNb-pdMw50g6TS8aT1ut1jVXKtInGRxswnIT4T7f9AS-Qy-CH3kVsgWoQ-qM0ZGLbI2NCYQ3LLW_6UA4cpHY_EZvvBjEj2CmQOVcSWrDaPw53jPA4e';

  
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
