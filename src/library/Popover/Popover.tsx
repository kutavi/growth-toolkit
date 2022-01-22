import { useEffect, useState } from 'react';
import { Icon, IconType } from '../Icon/Icon';
import * as styles from './Popover.module.scss';

interface PopoverProps {
  title: string;
  children: string | JSX.Element;
  isShown?: boolean;
  canClose?: boolean;
  buttonIcon?: IconType;
  toggle: (value: boolean) => void;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const Popover = ({
  toggle,
  title,
  children,
  isShown,
  position,
  canClose = true,
  buttonIcon,
}: PopoverProps) => {
  const positionStyle = {
    'top-left': styles.topLeft,
    'top-right': styles.topRight,
    'bottom-left': styles.bottomLeft,
    'bottom-right': styles.bottomRight,
  }[position];

  if (!isShown && buttonIcon) {
    return (
      <div
        className={`${styles.iconButton} ${positionStyle}`}
        onClick={() => toggle(true)}>
        <Icon icon={buttonIcon} />
      </div>
    );
  }

  if (!isShown) {
    return null;
  }

  return (
    <div className={`${styles.popover} ${positionStyle}`}>
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
