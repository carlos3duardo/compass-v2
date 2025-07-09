import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardGrid({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-grid"
      className={twMerge(
        'grid grid-cols-12 gap-3 px-4 py-4 xl:px-6',
        className,
      )}
      {...rest}
    />
  );
}
