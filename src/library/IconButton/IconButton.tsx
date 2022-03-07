import classnames from 'classnames';
import { Icon, IconType } from '../Icon/Icon';
import * as styles from './IconButton.module.scss';

interface IconButtonProps {
  icon: IconType;
  label?: string;
  onClick: () => void;
  type?: 'circle' | 'square';
  className?: any;
  disabled?: boolean;
}

export const IconButton = ({
  onClick,
  icon,
  className,
  disabled,
  label,
  type = 'square',
}: IconButtonProps) => (
  <button
    className={classnames(
      styles.iconButton,
      { [styles.disabled]: disabled },
      styles[type],
      className
    )}
    disabled={disabled}
    onClick={onClick}>
    {label && <span className={styles.label}>{label}</span>}
    <Icon icon={icon} />
  </button>
);
