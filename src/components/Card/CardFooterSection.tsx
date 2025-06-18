import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardFooterSection({
  className,
  ...rest
}: ComponentProps<'div'>) {
  return <div className={twMerge('', className)} {...rest} />;
}
