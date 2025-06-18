'use client';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
} from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReactNode, useCallback, useContext } from 'react';

import { DataTableContext } from './DataTableProvider';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  isCurrent?: boolean;
  onClick: () => void;
};

function PaginationButton({
  children,
  disabled,
  onClick,
  isCurrent = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      data-is-current={isCurrent}
      className="hover:not-disabled:data-[is-current=false]:bg-accent hover:not-disabled:data-[is-current=false]:text-accent-foreground data-[is-current=true]:bg-primary data-[is-current=true]:text-primary-foreground flex h-7 w-7 items-center justify-center rounded-sm text-sm hover:cursor-pointer disabled:opacity-50 disabled:hover:cursor-not-allowed"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

type DataTablePaginationProps = {
  pageSiblingsCount?: number;
};

export function DataTablePagination({
  pageSiblingsCount = 2,
}: DataTablePaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const {
    currentPage,
    setCurrentPage,
    pagesCount: lastPage,
    pageSize,
  } = useContext(DataTableContext);

  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);
      const offset = (page - 1) * pageSize;

      params.set('offset', offset.toString());
      params.set('limit', pageSize.toString());

      replace(`${pathname}?${params.toString()}`);

      setCurrentPage(page);
    },
    [pageSize, pathname, replace, searchParams, setCurrentPage],
  );

  if (!lastPage) {
    return null;
  }

  const pages = Array.from(Array(lastPage).keys())
    .map((index) => {
      const show = [1, currentPage, lastPage].includes(index + 1);
      const siblings = Math.abs(index + 1 - currentPage) <= pageSiblingsCount;
      const separator = [2, lastPage - 1].includes(index + 1);

      return {
        number: index + 1,
        show: show || siblings,
        siblings,
        separator,
      };
    })
    .filter((page) => page.show || page.siblings || page.separator);

  return (
    <div className="flex gap-0.5">
      <PaginationButton
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        <ChevronsLeft size={16} />
      </PaginationButton>
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} />
      </PaginationButton>

      {pages.map((page) =>
        page.show ? (
          <PaginationButton
            key={page.number}
            onClick={() => handlePageChange(page.number)}
            isCurrent={page.number === currentPage}
          >
            {page.number}
          </PaginationButton>
        ) : (
          <span
            key={page.number}
            className="flex h-7 w-6 items-center justify-center"
          >
            <Ellipsis size={14} />
          </span>
        ),
      )}

      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        <ChevronRight size={16} />
      </PaginationButton>

      <PaginationButton
        onClick={() => (lastPage ? handlePageChange(lastPage) : null)}
        disabled={currentPage === lastPage}
      >
        <ChevronsRight size={16} />
      </PaginationButton>
    </div>
  );
}
