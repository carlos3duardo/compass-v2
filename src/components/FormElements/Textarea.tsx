import React, { ElementType, forwardRef, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputContainer } from './InputContainer';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  id: string;
  name?: string;
  label?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  icon?: ElementType;
  error?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isSuccess?: boolean;
  defaultValue?: string;
}

const Textarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (
  {
    id,
    name,
    uppercase = false,
    lowercase = false,
    readOnly,
    disabled = false,
    error,
    placeholder,
    icon: Icon,
    size = 'md',
    required,
    className,
    rows = 3,
    ...rest
  },
  ref,
) => {
  return (
    <InputContainer
      required={required}
      error={error}
      disabled={disabled}
      size={size}
      className={twMerge('h-auto py-2', className)}
    >
      {Icon && (
        <Icon
          size={size === 'xs' ? 16 : size === 'lg' ? 24 : 16}
          weight="regular"
          data-error={!!error}
          className="text-slate-500 data-[error=true]:text-red-500"
        />
      )}
      <textarea
        ref={ref}
        data-uppercase={uppercase}
        data-lowercase={lowercase}
        data-disabled={disabled}
        data-readonly={readOnly}
        data-size={size}
        className="w-full bg-transparent text-sm font-medium text-slate-600 placeholder-slate-400 caret-blue-400 outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[lowercase=true]:lowercase data-[size=lg]:text-lg data-[size=sm]:text-xs data-[size=xs]:text-xs data-[uppercase=true]:uppercase dark:text-slate-200 dark:placeholder-slate-500"
        id={id}
        name={name || id}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        required={required}
        rows={rows}
        {...rest}
      />
    </InputContainer>
  );
};

export default forwardRef(Textarea);
