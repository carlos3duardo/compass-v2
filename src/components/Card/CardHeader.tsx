import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardHeader({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={twMerge(
        'flex items-center justify-between p-4 2xl:p-6',
        className,
      )}
      {...rest}
    />
  );
}
