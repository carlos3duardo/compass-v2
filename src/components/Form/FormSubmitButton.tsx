'use client';
import { useFormContext } from 'react-hook-form';

import Button, { ButtonProps } from '../Button';

export function FormSubmitButton({ children, ...rest }: ButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button type="submit" color="primary" isLoading={isSubmitting} {...rest}>
      {children}
    </Button>
  );
}
