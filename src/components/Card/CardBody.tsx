import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardBody({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-body"
      className={twMerge('p-4 2xl:p-6', className)}
      {...rest}
    />
  );
}
