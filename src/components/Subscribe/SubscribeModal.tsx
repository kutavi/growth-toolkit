import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  'https://07667286.sibforms.com/serve/MUIEACqJx8dqhR51Et__teZNMnpBpNpYu6ee0q7E2sBrg6VGKIN5rVX3_lqMnc9Y6nswUZdrCBHvwUE3OwqVRPGhCrxcRHS4i-eM_VYtNK_QC9ysp5NsoJ4ZCW11wJmjGxysJit1BPesrfIus3RqbfRlzYdmu0D9gg2Ex3a5Ub484JeE0m7F6Sn75XaASinmPvDYuExITuRJqoch';

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
      height='500'
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
