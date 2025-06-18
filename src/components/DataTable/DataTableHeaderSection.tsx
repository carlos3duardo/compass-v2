import { ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
}

export function DataTableHeaderSection({ children }: ComponentProps) {
  return <div className="flex items-center">{children}</div>;
}
