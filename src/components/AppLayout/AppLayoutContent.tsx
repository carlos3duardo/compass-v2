import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ComponentProps {
  children?: ReactNode;
  className?: string;
}
export function AppLayoutContent({ children, className }: ComponentProps) {
  return <main className={twMerge('flex-1 px-8', className)}>{children}</main>;
}
