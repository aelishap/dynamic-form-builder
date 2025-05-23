import { Checkbox } from 'antd';

const CheckboxGroup = ({ options = [], value = [], onChange }) => {
  const selectedValues = Array.isArray(value) ? value : [];

  const handleChange = (checkedValue, isChecked) => {
    if (isChecked) {
      onChange([...selectedValues, checkedValue]);
    } else {
      onChange(selectedValues.filter((val) => val !== checkedValue));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <Checkbox
          key={index}
          checked={selectedValues.includes(option)}
          onChange={(e) => handleChange(option, e.target.checked)}
        >
          {option}
        </Checkbox>
      ))}
    </div>
  );
};

export default CheckboxGroup;
