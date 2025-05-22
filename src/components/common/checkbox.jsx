import { Checkbox } from 'antd';

const CheckboxGroup = ({ options = [], values = {}, onChange }) => (
  <div className="flex flex-col gap-2">
    {options.map((option, index) => (
      <Checkbox
        key={index}
        checked={values?.[option] || false}
        onChange={(e) =>
          onChange({
            ...values,
            [option]: e.target.checked,
          })
        }
      >
        {option}
      </Checkbox>
    ))}
  </div>
);

export default CheckboxGroup;
