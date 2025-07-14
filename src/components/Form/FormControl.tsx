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
      data-slot="form-control"
      className={twMerge(
        'col-span-12 w-full group-[.layout-horizontal]:grid group-[.layout-horizontal]:grid-cols-12 group-[.layout-horizontal]:gap-1 md:group-[.layout-horizontal]:gap-4',
        className,
      )}
    >
      {label ? (
        <div
          data-slot="label"
          className="group-[.layout-horizontal] group-[.layout-horizontal]:col-span-12 group-[.layout-horizontal]:flex group-[.layout-horizontal]:items-center md:group-[.layout-horizontal]:col-span-3 md:group-[.layout-horizontal]:h-10 md:group-[.layout-horizontal]:justify-end"
        >
          <label
            className="text-muted-foreground text-sm leading-none font-medium group-[.layout-horizontal]:after:content-[':']"
            htmlFor={htmlFor}
          >
            {label}
          </label>
        </div>
      ) : (
        <div
          data-slot="label"
          className="hidden md:block md:group-[.layout-horizontal]:col-span-3 md:group-[.layout-horizontal]:justify-end"
        >
          &nbsp;
        </div>
      )}
      <div
        data-slot="input"
        className="group-[.layout-horizontal]:col-span-12 group-[.layout-horizontal]:grid group-[.layout-horizontal]:grid-cols-12 md:group-[.layout-horizontal]:col-span-9"
      >
        <div className={twMerge('col-span-12', className)}>
          {children}
          {error && (
            <div className="text-destructive/70 mt-1 flex items-center gap-1 pl-1 text-xs font-medium">
              <AlertCircle size={14} />
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
