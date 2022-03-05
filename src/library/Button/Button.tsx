import classnames from 'classnames';

import * as styles from './Button.module.scss';

interface ButtonProps {
  children: string;
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
  children,
  id,
  onClick,
  disabled,
  style,
  type = 'primary',
  size = 'default',
  className,
  fullWidth,
}: ButtonProps) => (
  <button
    style={style}
    className={classnames(
      styles.button,
      styles[type],
      styles[size],
      { [styles.disabled]: disabled },
      { [styles.fullWidth]: fullWidth },
      className
    )}
    onClick={!disabled ? onClick : () => null}>
    {children}
  </button>
);
