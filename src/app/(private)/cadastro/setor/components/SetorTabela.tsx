'use client';

import Link from 'next/link';

import { Button, DataTable, DataTableColumnProps } from '@/components';
import { ApiSetorRowProps } from '@/types';

const columns = [
  {
    field: 'nome',
    label: 'Nome',
    thClassName: 'text-left',
    content: ({ id, nome }: ApiSetorRowProps) => {
      return (
        <Link prefetch={false} href={`/cadastro/setor/${id}`}>
          {nome}
        </Link>
      );
    },
  },
  {
    field: 'responsavel.nome',
    label: 'Responsável',
    thClassName: 'text-left',
  },
  {
    field: 'ativo',
    label: 'Situação',
    thClassName: 'text-left',
    content: ({ ativo }: ApiSetorRowProps) => {
      return ativo ? 'Ativo' : 'Inativo';
    },
  },
] as DataTableColumnProps[];

export function SetorTabela() {
  return (
    <DataTable.Root>
      <DataTable.Header>
        <DataTable.HeaderSection>
          <DataTable.InputSearch />
        </DataTable.HeaderSection>
        <DataTable.HeaderSection>
          <Link href="/cadastro/setor/adicionar">
            <Button>Adicionar setor</Button>
          </Link>
        </DataTable.HeaderSection>
      </DataTable.Header>
      <DataTable.Content
        queryId="setores"
        dataSrc="/api/setor"
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
