import { useState } from 'react';
import { Icon, IconType } from '../Icon/Icon';
import * as styles from './Popover.module.scss';

interface PopoverProps {
  title: string;
  children: string | JSX.Element;
  isShown?: boolean;
  canClose?: boolean;
  buttonIcon?: IconType;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const availableSpaceBreakpoint = 1450;

export const Popover = ({
  title,
  children,
  isShown,
  position,
  canClose = true,
  buttonIcon,
}: PopoverProps) => {
  const [isOpen, setOpen] = useState(
    isShown ||
      (typeof window !== 'undefined' &&
        window.innerWidth >= availableSpaceBreakpoint)
  );

  const positionStyle = {
    'top-left': styles.topLeft,
    'top-right': styles.topRight,
    'bottom-left': styles.bottomLeft,
    'bottom-right': styles.bottomRight,
  }[position];

  if (!isOpen && buttonIcon) {
    return (
      <div
        className={`${styles.iconButton} ${positionStyle}`}
        onClick={() => setOpen(true)}>
        <Icon icon={buttonIcon} />
      </div>
    );
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${styles.popover} ${positionStyle}`}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {canClose && (
          <span onClick={() => setOpen(false)} className={styles.closeButton}>
            <Icon icon={'close'} />
          </span>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
