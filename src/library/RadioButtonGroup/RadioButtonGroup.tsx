import classnames from 'classnames';

import * as styles from './RadioButtonGroup.module.scss';

interface ButtonProps {
  options: { value: number; label: string }[];
  groupName: string | number;
  selectedValue: number;
  onSelect: (value: number) => void;
}
export const RadioButtonGroup = ({
  options,
  groupName,
  selectedValue,
  onSelect,
}: ButtonProps) => (
  <div className={styles.group}>
    {options.map(option => (
      <button
        onClick={() => onSelect(option.value)}
        key={option.value}
        className={classnames(styles.selection, {
          [styles.selected]: selectedValue === option.value,
        })}>
        {option.label}
      </button>
    ))}
  </div>
);
