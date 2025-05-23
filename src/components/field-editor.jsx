import {
  Button,
  TextInput,
  SelectInput,
} from '../components/common';
import { Checkbox, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useForm } from '../context/form-context';

const fieldTypes = ['text', 'textarea', 'select', 'checkbox', 'radio'];

const FieldEditor = () => {
  const { fields, setFields } = useForm();

  const addField = () => {
    setFields([
      ...fields,
      {
        id: Date.now(),
        type: 'text',
        label: '',
        placeholder: '',
        required: false,
        options: [],
      },
    ]);
  };

  const updateField = (id, key, value) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, [key]: value } : field)));
  };

  const addOption = (id) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, options: [...(field.options || []), ''] } : field
      )
    );
  };

  const updateOption = (id, index, value) => {
    setFields(
      fields.map((field) => {
        if (field.id === id) {
          const newOptions = [...(field.options || [])];
          newOptions[index] = value;
          return { ...field, options: newOptions };
        }
        return field;
      })
    );
  };

  const removeOption = (id, index) => {
    setFields(
      fields.map((field) => {
        if (field.id === id) {
          const newOptions = field.options.filter((_, i) => i !== index);
          return { ...field, options: newOptions };
        }
        return field;
      })
    );
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div className="max-h-[300px] gap-2 overflow-auto flex flex-col items-center bg-white p-4 rounded-lg shadow w-full mb-6">
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Add Form Fields</h2>
        <Button type="primary" onClick={addField}>Add Field</Button>
      </div>

      {fields.map((field) => (
        <div key={field.id} className="border p-2 rounded shadow space-y-3 bg-white w-full relative">
          <div className="flex gap-2 items-center">
            <SelectInput
              options={fieldTypes}
              value={field.type}
              onChange={(value) => updateField(field.id, 'type', value)}
            />
            <TextInput
              placeholder="Label"
              value={field.label}
              onChange={(e) => updateField(field.id, 'label', e.target.value)}
            />
            <TextInput
              placeholder="Placeholder"
              value={field.placeholder}
              onChange={(e) => updateField(field.id, 'placeholder', e.target.value)}
            />
            <Checkbox
              checked={field.required}
              onChange={(e) => updateField(field.id, 'required', e.target.checked)}
            >
              Required
            </Checkbox>
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => removeField(field.id)}
              title="Delete Field"
            >
              Remove
            </Button>
          </div>

          {(field.type === 'select' || field.type === 'radio' || field.type === 'checkbox') && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-gray-700">Options</label>
                <Button type="dashed" icon={<PlusOutlined />} onClick={() => addOption(field.id)}>
                  Add Option
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {field.options &&
                  field.options.map((option, index) => (
                    <Space key={index} className="w-full">
                      <TextInput
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => updateOption(field.id, index, e.target.value)}
                      />
                      <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => removeOption(field.id, index)}
                      />
                    </Space>
                  ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FieldEditor;
