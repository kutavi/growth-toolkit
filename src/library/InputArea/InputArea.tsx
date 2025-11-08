import { forwardRef } from 'react';
import * as styles from './InputArea.module.scss';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  className?: string;
  id?: string;
  label?: string;
  required?: boolean;
}
export const InputArea = forwardRef<HTMLTextAreaElement, InputAreaProps>(
  (
    {
      rows = 8,
      onChange,
      value,
      placeholder = '',
      onKeyDown,
      onBlur,
      className,
      id,
      label,
      required = false,
    },
    ref
  ) => (
    <textarea
      ref={ref}
      id={id}
      aria-label={label || placeholder}
      className={className || styles.input}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      aria-required={required}
    />
  )
);
