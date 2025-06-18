import { ReactNode } from 'react';

import { Card } from '../Card';

interface ComponentProps {
  children: ReactNode;
}

export function DataTableHeader({ children }: ComponentProps) {
  return (
    <Card.Header className="flex items-center justify-between gap-4 px-4 py-4 2xl:px-6">
      {children}
    </Card.Header>
  );
}
