import { ReactNode } from 'react';

interface ComponentProps {
  children?: ReactNode;
}
export function AppLayoutContent({ children }: ComponentProps) {
  return <main className="flex-1 px-8">{children}</main>;
}
