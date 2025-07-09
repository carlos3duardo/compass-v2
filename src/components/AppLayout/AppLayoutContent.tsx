import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ComponentProps {
  children?: ReactNode;
  className?: string;
}
export function AppLayoutContent({ children, className }: ComponentProps) {
  return (
    <main className={twMerge('flex-1 px-4 lg:px-6 2xl:px-8', className)}>
      {children}
    </main>
  );
}
