'use client';

import Link from 'next/link';

import { Button, DataTable, DataTableColumnProps } from '@/components';
import { ApiUnidadeRowProps } from '@/types';

const columns = [
  {
    field: 'nome',
    label: 'Nome',
    thClassName: 'text-left',
    content: ({ id, nome }: ApiUnidadeRowProps) => {
      return (
        <Link prefetch={false} href={`/cadastro/unidade/${id}`}>
          {nome}
        </Link>
      );
    },
  },
  {
    field: 'codigo',
    label: 'Código',
    thClassName: 'text-left',
    content: ({ id, codigo }: ApiUnidadeRowProps) => {
      return codigo ? (
        <Link prefetch={false} href={`/cadastro/colaborador/${id}`}>
          {codigo}
        </Link>
      ) : (
        ''
      );
    },
  },
  {
    field: 'municipio',
    label: 'Município / UF',
    thClassName: 'text-left',
    content: ({ id, municipio, uf }: ApiUnidadeRowProps) => {
      return municipio || uf ? (
        <Link prefetch={false} href={`/cadastro/unidade/${id}`}>
          {municipio && uf ? `${municipio} / ${uf}` : municipio || uf}
        </Link>
      ) : (
        ''
      );
    },
  },
  {
    field: 'responsavel',
    label: 'Responsável',
    thClassName: 'text-left',
    content: ({ id, responsavel }: ApiUnidadeRowProps) => {
      return responsavel ? (
        <Link prefetch={false} href={`/cadastro/unidade/${id}`}>
          {responsavel.nome}
        </Link>
      ) : (
        ''
      );
    },
  },
] as DataTableColumnProps[];

export function UnidadeTabela() {
  return (
    <DataTable.Root>
      <DataTable.Header>
        <DataTable.HeaderSection>
          <DataTable.InputSearch />
        </DataTable.HeaderSection>
        <DataTable.HeaderSection>
          <Link href="/cadastro/unidade/adicionar">
            <Button>Adicionar unidade</Button>
          </Link>
        </DataTable.HeaderSection>
      </DataTable.Header>
      <DataTable.Content
        queryId="unidades"
        dataSrc="/api/unidade"
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
