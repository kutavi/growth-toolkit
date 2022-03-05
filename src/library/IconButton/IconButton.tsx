import { Icon, IconType } from '../Icon/Icon';
import * as styles from './IconButton.module.scss';

interface IconButtonProps {
  icon: IconType;
  onClick: () => void;
  type?: 'circle' | 'square';
  className?: any;
}

export const IconButton = ({
  onClick,
  icon,
  className,
  type = 'square',
}: IconButtonProps) => (
  <div
    className={`${styles.iconButton} ${styles[type]} ${className}`}
    onClick={onClick}>
    <Icon icon={icon} />
  </div>
);
