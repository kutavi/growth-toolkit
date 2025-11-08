import classnames from 'classnames';

import * as styles from './RadioButtonGroup.module.scss';

interface RadioButtonGroupProps {
  label?: string;
  options: { value: number; label: string }[];
  selectedValue: number;
  onSelect: (value: number) => void;
}
export const RadioButtonGroup = ({
  label = 'Select an option',
  options,
  selectedValue,
  onSelect,
}: RadioButtonGroupProps) => (
  <div className={styles.group} role='radiogroup' aria-label={label}>
    {options.map(option => (
      <button
        onClick={() => onSelect(option.value)}
        key={option.value}
        role='radio'
        aria-checked={selectedValue === option.value}
        className={classnames(styles.selection, {
          [styles.selected]: selectedValue === option.value,
        })}>
        {option.label}
      </button>
    ))}
  </div>
);
