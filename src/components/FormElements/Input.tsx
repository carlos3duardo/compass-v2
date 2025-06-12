import React, { ElementType, forwardRef, InputHTMLAttributes } from 'react';

import { InputContainer } from './InputContainer';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    id,
    name,
    type = 'text',
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
      className={className}
    >
      {Icon && (
        <Icon
          size={size === 'xs' ? 16 : size === 'lg' ? 24 : 16}
          weight="regular"
          data-error={!!error}
          className="text-slate-500 data-[error=true]:text-red-500"
        />
      )}
      <input
        ref={ref}
        data-uppercase={uppercase}
        data-lowercase={lowercase}
        data-disabled={disabled}
        data-readonly={readOnly}
        data-size={size}
        className="text-foreground placeholder-foreground/60 caret-accent-foreground w-full bg-transparent text-sm font-medium outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[lowercase=true]:lowercase data-[size=lg]:text-lg data-[size=sm]:text-xs data-[size=xs]:text-xs data-[uppercase=true]:uppercase"
        type={type}
        id={id}
        name={name || id}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </InputContainer>
  );
};

export default forwardRef(Input);
