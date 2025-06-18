'use client';

import { useSearchParams } from 'next/navigation';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface DataTableContextProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  rowsCount: number | null;
  setRowsCount: Dispatch<SetStateAction<number | null>>;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  pagesCount: number | null;
  setPagesCount: Dispatch<SetStateAction<number | null>>;
}

export const DataTableContext = createContext({} as DataTableContextProps);

interface DataTableProviderProps {
  children: ReactNode;
  defaultPageSize: number;
}

export function DataTableProvider({
  children,
  defaultPageSize,
}: DataTableProviderProps) {
  const searchParams = useSearchParams();

  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(() => {
    const offset = searchParams.get('offset') || 0;
    const limit = searchParams.get('limit') || defaultPageSize;

    return Number(offset) / Number(limit) + 1;
  });
  const [rowsCount, setRowsCount] = useState<number | null>(null);
  const [pagesCount, setPagesCount] = useState<number | null>(null);

  return (
    <DataTableContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        rowsCount,
        setRowsCount,
        pageSize,
        setPageSize,
        pagesCount,
        setPagesCount,
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
}
