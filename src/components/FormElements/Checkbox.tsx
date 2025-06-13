import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  id?: string;
  name: string;
  label?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  error?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Checkbox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ id, name, label, error, size = 'md', ...rest }, ref) => {
  return (
    <label
      data-size={size}
      className="checkbox-container relative inline-flex cursor-pointer items-center gap-2 text-[1.5rem]"
    >
      <input
        ref={ref}
        id={id}
        name={name || id}
        type="checkbox"
        className="peer absolute h-0 w-0 cursor-pointer opacity-0"
        {...rest}
      />
      <div className="checkmark bg-card-background after:border-card peer-checked:border-primary peer-checked:bg-primary border-foreground/50 relative top-0 left-0 h-5 w-5 rounded border transition peer-checked:after:border-white"></div>
      {label && (
        <span data-size={size} className="text-sm data-[size=sm]:text-xs">
          {label}
        </span>
      )}
      {error && (
        <span className="text-xs font-medium text-red-400">{error}</span>
      )}

      <style jsx>{`
        .checkbox-container {
          user-select: none;
          .checkmark {
          }
          .checkmark:after {
            content: '';
            position: absolute;
            left: 6px;
            top: 2px;
            width: 6px;
            height: 12px;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        }
      `}</style>
    </label>
  );
};

export default forwardRef(Checkbox);
