import {
  TextInput,
  TextAreaInput,
  SelectInput,
  CheckboxGroup,
  RadioGroup,
} from '../components/common';
import { useForm } from '../context/form-context';
import FormRenderer from './form-renderer';

const FieldPreview = () => {
  const { fields, formData, setFormData } = useForm();

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="p-4 space-y-4 bg-gray-100 rounded">
      {fields.map((field) => (
        <div key={field.id}>
          <label className="block font-medium mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {field.type === 'text' && (
            <TextInput
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          )}

          {field.type === 'textarea' && (
            <TextAreaInput
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          )}

          {field.type === 'select' && (
            <SelectInput
              placeholder={field.placeholder}
              value={formData[field.id]}
              options={field.options || []}
              onChange={(value) => handleChange(field.id, value)}
            />
          )}

          {field.type === 'checkbox' && (
            <CheckboxGroup
              options={field.options || []}
              values={formData[field.id] || {}}
              onChange={(values) => handleChange(field.id, values)}
            />
          )}

          {field.type === 'radio' && (
            <RadioGroup
              options={field.options || []}
              value={formData[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          )}
        </div>
      ))}
      <FormRenderer />
    </div>
  );
};

export default FieldPreview;
