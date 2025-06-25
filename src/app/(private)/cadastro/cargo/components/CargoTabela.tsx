'use client';

import Link from 'next/link';

import { DataTable, DataTableColumnProps } from '@/components';
import { ApiCargoProps } from '@/types';

const columns = [
  {
    field: 'nome',
    label: 'Nome',
    thClassName: 'text-left',
    content: ({ id, nome }: ApiCargoProps) => {
      return (
        <div className="flex items-center gap-4">
          <Link prefetch={false} href={`/cadastro/cargo/${id}`}>
            {nome}
          </Link>
        </div>
      );
    },
  },
  {
    field: 'situacao',
    label: 'Situação',
    thClassName: 'text-left',
  },
  {
    field: 'qtde_colaboradores',
    label: 'Colaboradores',
    thClassName: 'text-center',
    tdClassName: 'text-center',
  },
] as DataTableColumnProps[];

export function CargoTabela() {
  return (
    <DataTable.Root>
      <DataTable.Header>
        <DataTable.HeaderSection>
          <DataTable.InputSearch />
        </DataTable.HeaderSection>
      </DataTable.Header>
      <DataTable.Content
        queryId="cargos"
        dataSrc="/api/cargo"
        columns={columns}
      />
      <DataTable.Footer>
        <DataTable.FooterSection>
          <DataTable.PagesCount />
        </DataTable.FooterSection>
        <DataTable.FooterSection>
          <DataTable.Pagination pageSiblingsCount={1} />
        </DataTable.FooterSection>
      </DataTable.Footer>
    </DataTable.Root>
  );
}
