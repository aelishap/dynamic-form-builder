import { Radio } from 'antd';

const RadioGroup = ({ options = [], value, onChange }) => (
  <Radio.Group value={value} onChange={onChange}>
    {options.map((option, index) => (
      <Radio key={index} value={option}>
        {option}
      </Radio>
    ))}
  </Radio.Group>
);

export default RadioGroup;
