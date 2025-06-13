'use client';

import {
  FieldValues,
  FormProvider as ReactHookFormProvider,
  FormProviderProps,
} from 'react-hook-form';

import { FormProvider } from './FormContext';

export function FormRoot<T extends FieldValues = FieldValues>({
  children,
  ...rest
}: FormProviderProps<T>) {
  return (
    <ReactHookFormProvider {...rest}>
      <FormProvider>{children}</FormProvider>
    </ReactHookFormProvider>
  );
}
