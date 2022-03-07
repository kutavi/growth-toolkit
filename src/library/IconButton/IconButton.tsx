import { Icon, IconType } from '../Icon/Icon';
import * as styles from './IconButton.module.scss';

interface IconButtonProps {
  icon: IconType;
  label?: string;
  onClick: () => void;
  type?: 'circle' | 'square';
  className?: any;
}

export const IconButton = ({
  onClick,
  icon,
  className,
  label,
  type = 'square',
}: IconButtonProps) => (
  <div
    className={`${styles.iconButton} ${styles[type]} ${className}`}
    onClick={onClick}>
    {label && <span className={styles.label}>{label}</span>}
    <Icon icon={icon} />
  </div>
);
