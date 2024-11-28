import { Form, Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  const { control } = useFormContext(); // Get control from FormProvider

  return (
    <div style={{ marginBottom: '20px' }}>
      <Controller
        name={name}
        control={control} // Pass control
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
