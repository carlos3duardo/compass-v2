'use client';
import { AlertCircle } from 'lucide-react';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FormControlProps = ComponentProps<'div'> & {
  children: ReactNode;
  label?: string;
  htmlFor?: string;
  error?: string | undefined;
};

export function FormControl({
  children,
  className,
  label,
  htmlFor,
  error,
}: FormControlProps) {
  return (
    <div
      className={twMerge(
        'control col-span-12 w-full group-[.layout-horizontal]:grid group-[.layout-horizontal]:grid-cols-12 group-[.layout-horizontal]:gap-4',
        className,
      )}
    >
      {label && (
        <div className="group-[.layout-horizontal] group-[.layout-horizontal]:col-span-3 group-[.layout-horizontal]:flex group-[.layout-horizontal]:h-10 group-[.layout-horizontal]:items-center group-[.layout-horizontal]:justify-end">
          <label
            className="text-sm font-medium text-slate-600 group-[.layout-horizontal]:after:content-[':'] dark:text-slate-400"
            htmlFor={htmlFor}
          >
            {label}
          </label>
        </div>
      )}
      <div className="group-[.layout-horizontal]:col-span-9 group-[.layout-horizontal]:grid group-[.layout-horizontal]:grid-cols-12">
        <div className={twMerge('', className)}>
          {children}
          {error && (
            <div className="mt-1 flex items-center gap-1 pl-1 text-xs font-medium text-red-400">
              <AlertCircle size={14} />
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
