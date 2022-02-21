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
      <div
        onClick={() => onSelect(option.value)}
        className={classnames(styles.selection, {
          [styles.selected]: selectedValue === option.value,
        })}>
        <input
          type='radio'
          id={option.value.toString()}
          name={groupName.toString()}
          value={option.label}
        />
        <label htmlFor={option.label}>{option.label}</label>
      </div>
    ))}
  </div>
);
