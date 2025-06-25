import { twMerge } from 'tailwind-merge';

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={twMerge('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}
