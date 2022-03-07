import { ActionMeta, MultiValue } from 'react-select';
import Select, { CreatableProps } from 'react-select/creatable';
import * as styles from './MultiSelect.module.scss';

type Option = {
  value: number | string;
  label: string;
};
interface MultiSelectProps extends CreatableProps<any, any, any> {
  onSelect: (
    selections: MultiValue<Option>,
    params?: ActionMeta<Option>
  ) => void;
  style?: any;
  options: Option[];
}
export const MultiSelect = ({
  onSelect,
  style,
  options,
  // eslint-disable-next-line
  placeholder,
  closeMenuOnSelect,
  value,
}: MultiSelectProps) => (
  <Select
    isMulti
    isClearable={false}
    onChange={onSelect}
    options={options}
    className={styles.select}
    closeMenuOnSelect={closeMenuOnSelect}
    value={value}
    styles={{
      control: base => ({
        ...base,
        borderRadius: '6px',
      }),
    }}
  />
);
