import classnames from 'classnames';

import * as styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  id?: string;
  onClick: () => void;
  className?: string;
  style?: any;
}
export const Button = ({
  label,
  id,
  onClick,
  className = '',
  style,
}: ButtonProps) => (
  <div
    style={style}
    className={classnames(styles.button, className)}
    onClick={onClick}>
    {label}
  </div>
);
