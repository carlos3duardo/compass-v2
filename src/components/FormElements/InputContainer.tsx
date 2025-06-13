import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type InputContainerProps = ComponentProps<'div'> & {
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: string | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

export function InputContainer({
  children,
  error,
  required,
  disabled,
  size = 'md',
  className,
}: InputContainerProps) {
  return (
    <div
      data-error={!!error}
      data-required={required}
      aria-required={required}
      data-disabled={disabled}
      aria-disabled={disabled}
      data-size={size}
      className={twMerge(
        'focus-within:border-primary border-primary/30 focus-within:ring-primary/20 hover:data-[disabled=false]:border-primary data-[readonly=true]:border-primary/30 data-[readonly=true]:bg-primary/10 data-[readonly=true]:focus-within:border-primary/30 data-[readonly=true]:focus-within:ring-primary/20 data-[error=true]:border-destructive/50 focus-within:data-[error=true]:ring-destructive/20 hover:data-[error=true]:border-destructive/70 relative flex h-10 w-full items-center gap-2 rounded-md border px-2 transition duration-200 focus-within:ring-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:border-slate-300 data-[disabled=true]:bg-slate-100 data-[size=lg]:h-12 data-[size=lg]:px-3 data-[size=sm]:h-8 data-[size=xs]:h-6',
        className,
      )}
    >
      {children}
    </div>
  );
}
