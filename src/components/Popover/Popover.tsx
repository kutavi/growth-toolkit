import { useState } from 'react';
import * as styles from './Popover.module.scss';

interface PopoverProps {
  title: string;
  description: string | JSX.Element;
  isShown: boolean;
  canClose?: boolean;
}

export const Popover = ({
  title,
  description,
  isShown,
  canClose = true,
}: PopoverProps) => {
  const [isOpen, setOpen] = useState(isShown);

  if (!isOpen) {
    return (
      <div className={styles.infoIcon} onClick={() => setOpen(true)}>
        {'i'}
      </div>
    );
  }
  return (
    <div className={styles.popover}>
      <div className={styles.header}>
        <span className={styles.name}>{title}</span>
        {canClose && (
          <span onClick={() => setOpen(false)} className={styles.closeButton}>
            {'x'}
          </span>
        )}
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
