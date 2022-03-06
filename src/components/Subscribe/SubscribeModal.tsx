import Modal from '../../library/Modal/Modal';
import { track } from '../../utils/helpers';
import * as styles from './Subscribe.module.scss';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const iframeSrc =
  'https://07667286.sibforms.com/serve/MUIEALOPOrBQqTDCtGiLVNFpfbLNmU8i44dSeLB8WBFGiXcrIrSMdddMxUVU0PKWxk0jTkeNAC5xM5KQNkDzW_4_tjhjjNxXlCSrfuwREqTk575KbEM2ATMv3GEw5LG5rKgQ6TB7agLOnyP4oelugyyrx8qFpM45a6--XhhBGtZdloNjaR81T4rPKawrvIt4XMbrTLZeuO4DjoMC';

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
