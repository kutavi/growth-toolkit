import * as styles from './InputArea.module.scss';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
  name: string;
}
export const InputArea = ({
  rows = 8,
  onChange,
  value,
  placeholder = '',
  name,
}: InputAreaProps) => (
  <textarea
    className={styles.input}
    placeholder={placeholder}
    rows={rows}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
