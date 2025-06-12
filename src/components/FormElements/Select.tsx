import React, { ElementType, forwardRef, SelectHTMLAttributes } from 'react';

import { InputContainer } from './InputContainer';

export type SelectOption = {
  value: string;
  label: string;
};

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  icon?: ElementType;
  error?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  readOnly?: boolean;
  options: SelectOption[] | undefined;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  {
    id,
    name,
    uppercase = false,
    lowercase = false,
    readOnly = false,
    disabled = false,
    error,
    placeholder,
    icon: Icon,
    size = 'md',
    required,
    options,
    defaultValue,
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
      className="px-1"
    >
      {Icon && (
        <Icon
          size={size === 'xs' ? 16 : size === 'lg' ? 24 : 16}
          weight="regular"
          data-error={!!error}
          className="text-slate-500 data-[error=true]:text-red-500"
        />
      )}
      <select
        ref={ref}
        data-uppercase={uppercase}
        data-lowercase={lowercase}
        data-disabled={disabled}
        data-readonly={readOnly}
        data-size={size}
        className="w-full bg-transparent pr-1 text-sm font-medium text-slate-600 placeholder-slate-400 caret-blue-400 outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[lowercase=true]:lowercase data-[size=lg]:text-lg data-[size=sm]:text-xs data-[size=xs]:text-xs data-[uppercase=true]:uppercase dark:text-slate-200 dark:placeholder-slate-500"
        id={id}
        name={name || id}
        disabled={disabled}
        required={required}
        defaultValue={defaultValue}
        {...rest}
      >
        {placeholder && (
          <option value="" className="dark:bg-slate-800">
            {placeholder}
          </option>
        )}
        {options ? (
          options.map((option: SelectOption) => (
            <option
              key={option.value}
              value={option.value}
              className="mx-0 px-0 dark:bg-slate-800"
            >
              {option.label}
            </option>
          ))
        ) : (
          <option value="">Selecione...</option>
        )}
      </select>
    </InputContainer>
  );
};

export default forwardRef(Select);
