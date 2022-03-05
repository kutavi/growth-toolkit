import 'react-responsive-modal/styles.css';
import { Modal as ModalComponent } from 'react-responsive-modal';
import * as styles from './Modal.module.scss';

interface ModalProps {
    isShown: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Modal = ({ isShown, onClose, children, title }: ModalProps) => {
  
    return (
      <div>
        <ModalComponent open={isShown} onClose={onClose} center classNames={{modal: styles.modal}}>
          <h2>{title}</h2>
          <div className={styles.divider} />
          {children}
        </ModalComponent>
      </div>
    );
  };

export default Modal;
