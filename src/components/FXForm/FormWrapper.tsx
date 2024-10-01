"use client";

import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface TFormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface TProps extends TFormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

const FormWrapper = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: TProps) => {
  const formConfig: TFormConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  // use resolver Zod Validation
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  // const methods = useForm({ defaultValues, resolver });
  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormWrapper;
