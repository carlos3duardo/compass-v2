import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function CardRoot({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm',
        className,
      )}
      {...rest}
    />
  );
}
