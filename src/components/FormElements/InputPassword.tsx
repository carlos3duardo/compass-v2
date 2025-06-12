'use client';

import { Eye, EyeOff, KeyRound } from 'lucide-react';
import React, {
  ElementType,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';

import { InputContainer } from './InputContainer';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id: string;
  name?: string;
  label?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  icon?: ElementType;
  error?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const InputPassword: React.ForwardRefRenderFunction<
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
    icon: Icon = KeyRound,
    size = 'md',
    required,
    className,
    ...rest
  },
  ref,
) => {
  const [showPassword, setShowPassword] = useState(false);

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
          size={size === 'xs' ? 16 : size === 'lg' ? 24 : 20}
          weight="regular"
          data-error={!!error}
          className="text-slate-500 data-[error=true]:text-red-500"
        />
      )}
      <input
        ref={ref}
        data-disabled={disabled}
        data-readonly={readOnly}
        data-size={size}
        className="text-foreground placeholder-foreground/60 caret-accent-foreground w-full bg-transparent text-sm font-medium outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[lowercase=true]:lowercase data-[size=lg]:text-lg data-[size=sm]:text-xs data-[size=xs]:text-xs data-[uppercase=true]:uppercase"
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={name || id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        {...rest}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        title={showPassword ? 'Esconder senha' : 'Exibir senha'}
        className="mr-1 text-slate-500"
      >
        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </InputContainer>
  );
};

export default forwardRef(InputPassword);
