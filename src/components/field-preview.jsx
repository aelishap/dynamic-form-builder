import React from 'react';
import {
  TextInput,
  TextAreaInput,
  SelectInput,
  CheckboxGroup,
  RadioGroup,
} from '../components/common';
import { useForm } from '../context/form-context';
import { Form } from 'antd';
import FormRenderer from './form-renderer';

const FieldPreview = () => {
  const { fields, formData, setFormData } = useForm();
  const [form] = Form.useForm();

  const onValuesChange = (_, allValues) => {
    setFormData(allValues);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={onValuesChange}
      initialValues={formData}
    >
      {fields.map((field) => {
        let inputNode = null;

        switch (field.type) {
          case 'text':
            inputNode = (
              <TextInput
                placeholder={field.placeholder}
              />
            );
            break;

          case 'textarea':
            inputNode = (
              <TextAreaInput
                placeholder={field.placeholder}
              />
            );
            break;

          case 'select':
            inputNode = (
              <SelectInput
                placeholder={field.placeholder}
                options={field.options || []}
              />
            );
            break;

          case 'checkbox':
            inputNode = (
              <CheckboxGroup
                options={field.options || []}
              />
            );
            break;

          case 'radio':
            inputNode = (
              <RadioGroup
                options={field.options || []}
              />
            );
            break;

          default:
            return null;
        }

        return (
          <Form.Item
            key={field.id}
            name={field.id.toString()}
            label={field.label}
            rules={
              field.required
                ? [{ required: true, message: `${field.label} is required` }]
                : []
            }
          >
            {inputNode}
          </Form.Item>
        );
      })}

      <FormRenderer form={form} />
    </Form>
  );
};

export default FieldPreview;
