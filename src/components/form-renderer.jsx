import { Button, message } from 'antd';
import { useForm } from '../context/form-context';

const FormRenderer = () => {
  const { fields, formData } = useForm();

  const handleSubmit = () => {
    const errors = fields.filter(field => field.required && !formData[field.id]);
    if (errors.length > 0) {
      message.error('Please fill all required fields');
    } else {
      console.log('Form Data:', formData);
      message.success('Form submitted successfully!');
    }
  };

  return <Button type="primary" onClick={handleSubmit}>Submit</Button>;
};

export default FormRenderer
