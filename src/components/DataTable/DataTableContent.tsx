'use client';

import { useQuery } from '@tanstack/react-query';
import axios, { isAxiosError } from 'axios';
import { get } from 'lodash';
import Lottie from 'lottie-react';
import md5 from 'md5';
import { useSearchParams } from 'next/navigation';
import { CSSProperties, ReactNode, useContext, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import errorIcon from '@/assets/lotties/network-error.json';
import noDataIcon from '@/assets/lotties/search-warning.json';
import loadingIcon from '@/assets/lotties/table-loading.json';

import { Card } from '../Card';
import { DataTableContext } from './DataTableProvider';

type FilterProps = {
  field: string;
  type: 'radio' | 'checkbox' | 'select';
  options: { label: string; value: string }[];
};

type QueryParams = Record<string, string | number | boolean>;

export type ColumnProps = {
  field: string;
  label: string;
  sortable?: boolean;
  thStyles?: CSSProperties;
  thClassName?: string;
  tdStyles?: CSSProperties;
  tdClassName?: string;
  orderable?: boolean;
  content?: (data: string | unknown) => ReactNode;
};
interface ComponentProps {
  queryId: string;
  columns: ColumnProps[];
  dataSrc: string;
  defaultParams?: QueryParams;
  filter?: FilterProps[];
  emptyTableMessage?: string;
  userCanChangePageSize?: boolean;
}

export function DataTableContent({
  queryId,
  dataSrc,
  columns,
}: ComponentProps) {
  const { setRowsCount, setPagesCount, pageSize } =
    useContext(DataTableContext);

  const searchParams = useSearchParams();

  const offset = searchParams.get('offset') || 0;
  const limit = searchParams.get('limit') || pageSize;
  const search = searchParams.get('search') || '';

  const { isSuccess, data, isLoading, isError, error } = useQuery({
    queryKey: [queryId, dataSrc, offset, limit, search],
    queryFn: async () => {
      try {
        const response = await axios({
          method: 'get',
          url: dataSrc,
          params: { offset, limit, search },
        });

        return response.data;
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(`Response: ${error.response?.data.message}`);
        }

        console.error(error);

        throw new Error(`Erro desconhecido: ${error}`);
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setRowsCount(data.total);
      setPagesCount(data.pages);
    }
  }, [data, isSuccess, setRowsCount, setPagesCount]);

  const getData = <T extends object, R = unknown>(
    row: T,
    prop: string,
    defaultValue: string = '',
  ): R => {
    return get(row, prop, defaultValue) as R;
  };

  const tableHeader = (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={`${dataSrc}-head-${column.field}`}
            className={twMerge(
              'text-muted-foreground bg-muted p-2 text-xs font-semibold uppercase first:rounded-tl-md first:pl-4 last:rounded-tr-md last:pr-4',
              column.thClassName,
            )}
            style={column.thStyles}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );

  if (isLoading) {
    return (
      <Card.Body className="py-0 2xl:py-0">
        <table className="w-full">
          {tableHeader}
          <tbody>
            <tr>
              <td colSpan={columns.length}>
                <div className="flex flex-col items-center px-4 py-6">
                  <figure className="h-24 w-24">
                    <Lottie animationData={loadingIcon} />
                  </figure>
                  <p className="text-muted-foreground text-center text-sm font-medium">
                    Carregando dados.
                    <br />
                    Aguarde...
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    );
  }

  if (isError) {
    return (
      <Card.Body className="py-0 2xl:py-0">
        <table className="w-full">
          {tableHeader}
          <tbody>
            <tr>
              <td colSpan={columns.length}>
                <div className="flex flex-col items-center gap-2 px-4 py-6">
                  <figure className="h-24 w-24">
                    <Lottie animationData={errorIcon} />
                  </figure>

                  <div className="border-destructive/40 rounded-md border text-sm font-medium">
                    <span className="block p-4 text-center">
                      Ocorreu um erro ao carregar os dados.
                    </span>
                    <span className="bg-destructive/10 text-destructive/90 block p-4 text-center text-xs">
                      {error?.message}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    );
  }

  if (isSuccess) {
    if (data.data.length === 0) {
      return (
        <Card.Body className="py-0 2xl:py-0">
          <table className="w-full">
            {tableHeader}
            <tbody>
              <tr>
                <td colSpan={columns.length}>
                  <div className="flex flex-col items-center px-4 py-6">
                    <figure className="h-24 w-24">
                      <Lottie animationData={noDataIcon} />
                    </figure>
                    <p className="text-muted-foreground text-center text-sm font-medium">
                      Nenhum registro encontrado.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      );
    }

    return (
      <Card.Body className="py-0 2xl:py-0">
        <table className="w-full">
          {tableHeader}
          <tbody>
            {data.data.map((row: object) => {
              return (
                <tr key={JSON.stringify(row)} className="even:bg-muted/50">
                  {columns.map((column) => {
                    return (
                      <td
                        key={`${md5(JSON.stringify(row))}-${column.field}`}
                        className={twMerge(
                          'border-border border-b px-2 py-3 text-sm font-medium first:pl-4 last:pr-4',
                          column.tdClassName,
                        )}
                        style={column.tdStyles}
                      >
                        {typeof column.content !== 'undefined'
                          ? column.content(row)
                          : getData(row, column.field)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card.Body>
    );
  }
}
