import { twMerge } from 'tailwind-merge';

export function CardTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <div
      data-slot="card-title"
      className={twMerge('leading-none font-semibold', className)}
      {...props}
    />
  );
}
