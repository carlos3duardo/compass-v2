import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalBodyProps = ComponentProps<'div'> & {};

export function ModalBody({ children, className, ...rest }: ModalBodyProps) {
  return (
    <div
      className={twMerge(
        '_modalBody_ relative overflow-y-auto px-5 py-4',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
