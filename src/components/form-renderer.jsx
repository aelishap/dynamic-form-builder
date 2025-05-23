import { Button, message } from 'antd';
import { useForm } from '../context/form-context';

const FormRenderer = ({ form }) => {
  const { fields, setFormData } = useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      const readableData = {};
      fields.forEach((field) => {
        readableData[field.label || `field_${field.id}`] = values[field.id.toString()];
      });
      console.log(readableData, 'output')
      localStorage.setItem('formData', JSON.stringify(values));
      message.success('Form submitted successfully!');
      setFormData(values);
    } catch (errorInfo) {
      message.error('Please fill all required fields');
    }
  };

  return <Button type="primary" onClick={handleSubmit}>Submit</Button>;
};

export default FormRenderer;
