'use client';

import { useContext } from 'react';

import { DataTableContext } from './DataTableProvider';

export function DataTablePagesCount() {
  const { rowsCount } = useContext(DataTableContext);
  return (
    <div className="text-muted-foreground text-sm font-semibold">
      {rowsCount && (
        <>
          {rowsCount}{' '}
          {rowsCount === 1 ? 'registro encontrado' : 'registros encontrados'}
        </>
      )}
    </div>
  );
}
