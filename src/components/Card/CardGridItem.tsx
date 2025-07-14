import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CardGridItemProps = ComponentProps<'div'> & {
  children: ReactNode;
  label?: string;
  tooltip?: string;
};

export function CardGridItem({
  label,
  tooltip,
  className,
  children,
  ...rest
}: CardGridItemProps) {
  return (
    <div
      data-env={
        process.env.NEXT_PUBLIC_APP_ENV === 'development' ? 'dev' : 'prod'
      }
      className={twMerge(
        'text-md col-span-12 font-medium data-[env=dev]:bg-slate-100 dark:data-[env=dev]:bg-slate-800',
        className,
      )}
      {...rest}
    >
      {label && (
        <span
          className="block text-sm leading-tight font-normal text-slate-400"
          title={tooltip}
        >
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
