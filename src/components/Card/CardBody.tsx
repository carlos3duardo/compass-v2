import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardBody({
  className,
  nopadding = false,
  ...rest
}: ComponentProps<'div'> & {
  nopadding?: boolean;
}) {
  return (
    <div
      data-slot="card-body"
      data-nopadding={nopadding}
      className={twMerge(
        'p-4 data-[nopadding=true]:p-0 2xl:p-6 data-[nopadding=true]:2xl:p-0',
        className,
      )}
      {...rest}
    />
  );
}
