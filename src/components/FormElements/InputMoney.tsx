'use client';
import { Check } from 'lucide-react';
import Image from 'next/image';
import React, { ChangeEvent, ElementType, forwardRef } from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';

import spinner from '@/assets/images/spinners/ring-with-bg.svg';

import { InputContainer } from './InputContainer';

export interface InputProps
  extends Omit<IMaskInputProps<HTMLInputElement>, 'size'> {
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
}

const InputMoney: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  {
    id,
    name,
    readOnly,
    disabled = false,
    error,
    placeholder,
    icon: Icon,
    size = 'md',
    required,
    onBlur,
    onChange,
    defaultValue,
    isLoading = false,
    isSuccess = false,
    className,
    autoComplete = 'on',
  },
  ref,
) => {
  return (
    <InputContainer
      data-error={!!error}
      data-required={required}
      aria-required={required}
      data-disabled={disabled}
      aria-disabled={disabled}
      data-size={size}
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
      <IMaskInput
        id={id || name}
        inputRef={ref}
        mask={Number}
        scale={2}
        thousandsSeparator=""
        padFractionalZeros={true}
        autofix={true}
        radix=","
        className="w-full bg-transparent text-sm font-medium text-slate-600 placeholder-slate-400 caret-blue-400 outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[lowercase=true]:lowercase data-[size=lg]:text-lg data-[size=sm]:text-xs data-[size=xs]:text-xs data-[uppercase=true]:uppercase dark:text-slate-200 dark:placeholder-slate-500"
        placeholder={placeholder}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(evt);
          }
        }}
        onBlur={(evt) => {
          if (onBlur) {
            onBlur(evt);
          }
        }}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        readOnly={readOnly}
      />
      {isLoading && (
        <Image src={spinner} width={20} height={20} alt="Carregando..." />
      )}
      {isSuccess && <Check size={20} className="text-green-500" />}
    </InputContainer>
  );
};

export default forwardRef(InputMoney);
