import classnames from 'classnames';
import { Modal as ModalComponent } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import * as styles from './Modal.module.scss';

interface ModalProps {
  isShown: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  fullScreen?: boolean;
  className?: string;
}

const Modal = ({
  isShown,
  onClose,
  children,
  title,
  fullScreen,
  className,
}: ModalProps) => (
  <div>
    <ModalComponent
      open={isShown}
      onClose={onClose}
      classNames={{
        modal: classnames(
          styles.modal,
          { [styles.fullScreen]: fullScreen },
          className
        ),
      }}>
      {title && (
        <>
          <h2>{title}</h2>
          <div className={styles.divider} />
        </>
      )}
      <div className={styles.body}>{children}</div>
    </ModalComponent>
  </div>
);

export default Modal;
