'use client';

import Link from 'next/link';

import { Button, DataTable, DataTableColumnProps } from '@/components';
import { ApiEquipeRowProps } from '@/types';

const columns = [
  {
    field: 'nome',
    label: 'Nome',
    thClassName: 'text-left',
    content: ({ id, nome }: ApiEquipeRowProps) => {
      return (
        <Link prefetch={false} href={`/cadastro/equipe/${id}`}>
          {nome}
        </Link>
      );
    },
  },
  {
    field: 'membros_count',
    label: 'Membros',
    thClassName: 'text-center',
    tdClassName: 'text-center',
    content: ({ id, membros_count }: ApiEquipeRowProps) => {
      return (
        <Link prefetch={false} href={`/cadastro/colaborador/${id}`}>
          {membros_count}
        </Link>
      );
    },
  },
  {
    field: 'superior.id',
    label: 'Equipe superior',
    thClassName: 'text-left',
    content: ({ id, superior }: ApiEquipeRowProps) => {
      return superior ? (
        <Link prefetch={false} href={`/cadastro/equipe/${id}`}>
          {superior.nome}
        </Link>
      ) : (
        ''
      );
    },
  },
] as DataTableColumnProps[];

export function EquipeTabela() {
  return (
    <DataTable.Root>
      <DataTable.Header>
        <DataTable.HeaderSection>
          <DataTable.InputSearch />
        </DataTable.HeaderSection>
        <DataTable.HeaderSection>
          <Link href="/cadastro/equipe/adicionar">
            <Button>Adicionar equipe</Button>
          </Link>
        </DataTable.HeaderSection>
      </DataTable.Header>
      <DataTable.Content
        queryId="equipes"
        dataSrc="/api/equipe"
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
