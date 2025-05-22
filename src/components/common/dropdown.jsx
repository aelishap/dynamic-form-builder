import { Select } from 'antd';

const { Option } = Select;

const Dropdown = ({ options = [], value, onChange, placeholder, ...rest }) => (
  <Select
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full"
    {...rest}
  >
    {options.map((option, index) => (
      <Option key={index} value={option}>
        {option}
      </Option>
    ))}
  </Select>
);

export default Dropdown;
