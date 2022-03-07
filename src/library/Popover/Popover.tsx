import classnames from 'classnames';
import useIsMobile from '../../state/hooks/useIsMobile';
import { Icon, IconType } from '../Icon/Icon';
import { IconButton } from '../IconButton/IconButton';
import Modal from '../Modal/Modal';
import * as styles from './Popover.module.scss';

interface PopoverProps {
  title: string;
  children: string | JSX.Element;
  isShown: boolean;
  canClose?: boolean;
  buttonIcon: IconType;
  buttonLabel?: string;
  toggle: (value: boolean) => void;
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export const Popover = ({
  toggle,
  title,
  children,
  isShown,
  position,
  canClose = true,
  buttonIcon,
  buttonLabel,
}: PopoverProps) => {
  const isMobile = useIsMobile();

  const positionStyle = `${styles[position]} ${styles[position + 'Color']}`;

  if (!isShown && buttonIcon) {
    return (
      <IconButton
        className={`${positionStyle}`}
        onClick={() => toggle(true)}
        icon={buttonIcon}
        label={isMobile ? '' : buttonLabel}
      />
    );
  }

  if (isMobile) {
    return (
      <Modal
        fullScreen
        className={styles[`${position}Color`]}
        isShown={isShown}
        title={title}
        onClose={() => toggle(false)}>
        {children}
      </Modal>
    );
  }

  if (!isShown) {
    return null;
  }

  return (
    <div className={classnames(styles.popover, positionStyle)}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {canClose && (
          <span onClick={() => toggle(false)} className={styles.closeButton}>
            <Icon icon={'close'} />
          </span>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
