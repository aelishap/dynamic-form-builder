import { Input } from 'antd';

const TextInput = ({ value, onChange, placeholder, ...rest }) => (
  <Input
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

export default TextInput;
