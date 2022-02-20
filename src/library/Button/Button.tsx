import classnames from 'classnames';

import * as styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  id?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'primary' | 'secondary' | 'alert';
  size?: 'default' | 'sm' | 'lg';
  style?: any;
  fullWidth?: boolean;
}
export const Button = ({
  label,
  id,
  onClick,
  disabled,
  style,
  type = 'primary',
  size = 'default',
  fullWidth,
}: ButtonProps) => (
  <button
    style={style}
    className={classnames(
      styles.button,
      styles[type],
      styles[size],
      { [styles.disabled]: disabled },
      { [styles.fullWidth]: fullWidth }
    )}
    onClick={!disabled ? onClick : () => null}>
    {label}
  </button>
);
