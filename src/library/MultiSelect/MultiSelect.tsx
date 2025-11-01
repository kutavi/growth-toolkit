import { ActionMeta, MultiValue } from 'react-select';
import Select, { CreatableProps } from 'react-select/creatable';
import * as styles from './MultiSelect.module.scss';

type Option = {
  value: number | string;
  label: string;
};
interface MultiSelectProps extends CreatableProps<Option, true, never> {
  onSelect: (
    selections: MultiValue<Option>,
    params?: ActionMeta<Option>
  ) => void;
  options: Option[];
}
export const MultiSelect = ({
  onSelect,
  options,
  placeholder,
  closeMenuOnSelect,
  value,
}: MultiSelectProps) => (
  <Select
    isMulti
    isClearable
    onChange={onSelect}
    options={options}
    className={styles.select}
    closeMenuOnSelect={closeMenuOnSelect}
    placeholder={placeholder}
    value={value}
    styles={{
      control: base => ({
        ...base,
        borderRadius: '6px',
      }),
    }}
  />
);
