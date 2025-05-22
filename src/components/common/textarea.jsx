import { Input } from 'antd';

const TextAreaInput = ({ value, onChange, placeholder, ...rest }) => (
  <Input.TextArea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

export default TextAreaInput;
