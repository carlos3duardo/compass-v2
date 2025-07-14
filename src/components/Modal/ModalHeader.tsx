import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalHeaderProps = ComponentProps<'div'> & {
  title: string;
  subtitle?: string;
};

export function ModalHeader({
  children,
  className,
  title,
  subtitle,
  ...rest
}: ModalHeaderProps) {
  return (
    <div className={twMerge('border-b px-5 py-4', className)} {...rest}>
      <h2 className="text-lg leading-none font-semibold">{title}</h2>
      {subtitle && (
        <h3 className="mt-1 text-sm leading-none font-semibold opacity-60">
          {subtitle}
        </h3>
      )}
      {children}
    </div>
  );
}
