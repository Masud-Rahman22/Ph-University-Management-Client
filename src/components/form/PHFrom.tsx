/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from 'antd';
import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
  resetAfterSubmit?: boolean; // New optional prop
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PHForm = ({ onSubmit, children, defaultValues, resolver, resetAfterSubmit }: TFormProps) => {
  const methods = useForm({ defaultValues, resolver });

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    if (resetAfterSubmit) methods.reset(); // Reset only if specified
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
