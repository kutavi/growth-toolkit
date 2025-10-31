import classnames from 'classnames';
import { CSSProperties } from 'react';

import * as styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'primary' | 'secondary' | 'alert';
  size?: 'default' | 'sm' | 'lg';
  style?: CSSProperties;
  fullWidth?: boolean;
}
export const Button = ({
  children,
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
