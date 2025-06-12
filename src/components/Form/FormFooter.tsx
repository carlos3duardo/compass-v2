'use client';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FooterProps = ComponentProps<'div'> & {
  children: ReactNode;
};

export function FormFooter({ children, className, ...rest }: FooterProps) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-between px-4 py-4 xl:px-6',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
