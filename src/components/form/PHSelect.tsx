import { Form, Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
};

const PHSelect = ({ label, name, options, disabled }: TPHSelectProps) => {
  const { control } = useFormContext(); // Get control from FormProvider

  return (
    <Controller
      name={name}
      control={control} // Pass control
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            options={options}
            size="large"
            disabled={disabled}
            onChange={(value) => field.onChange(value)} // Ensure value is updated
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
