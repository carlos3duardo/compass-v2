'use client';

import { ReactNode } from 'react';

import { Card } from '../Card';
import { DataTableProvider } from './DataTableProvider';

interface ComponentProps {
  children: ReactNode;
  defaultPageSize?: number;
}

export function DataTableRoot({
  children,
  defaultPageSize = 10,
}: ComponentProps) {
  return (
    <DataTableProvider defaultPageSize={defaultPageSize}>
      <Card.Root data-slot="card">{children}</Card.Root>
    </DataTableProvider>
  );
}
