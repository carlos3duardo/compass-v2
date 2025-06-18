'use client';

import Avvvatars from 'avvvatars-react';
import Image from 'next/image';
import Link from 'next/link';

import { DataTable, DataTableColumnProps } from '@/components';
import { initials } from '@/helpers';
import { ApiColaboradorListProps } from '@/types';

const columns = [
  {
    field: 'usuario.nome',
    label: 'Nome',
    thClassName: 'text-left',
    content: ({ id, usuario }: ApiColaboradorListProps) => {
      return (
        <div className="flex items-center gap-4">
          <Link prefetch={false} href={`/cadastro/colaborador/${id}`}>
            {usuario.avatar_url ? (
              <Image
                src={usuario.avatar_url || '/images/avatar-placeholder.jpg'}
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  aspectRatio: '1 / 1',
                }}
              />
            ) : (
              <Avvvatars
                value={usuario.email}
                displayValue={initials(usuario.nome)}
                size={38}
              />
            )}
          </Link>
          <Link prefetch={false} href={`/cadastro/colaborador/${id}`}>
            <div className="leading-none">
              <span className="block">{usuario.nome}</span>
              <span className="text-muted-foreground block text-xs">
                {usuario.email}
              </span>
            </div>
          </Link>
        </div>
      );
    },
  },
  {
    field: 'cargo.nome',
    label: 'Cargo',
    thClassName: 'text-left',
  },
  {
    field: 'situacao.nome',
    label: 'Situação',
    thClassName: 'text-left',
    content: ({ situacao }: ApiColaboradorListProps) => {
      return (
        <span
          className="rounded px-2 py-1 text-xs font-medium"
          style={{
            boxShadow: `0 0 0 1px ${situacao.cor}44`,
            backgroundColor: `${situacao.cor}11`,
            color: `${situacao.cor}`,
          }}
        >
          {situacao.nome}
        </span>
      );
    },
  },
] as DataTableColumnProps[];

export function ColaboradorTabela() {
  return (
    <DataTable.Root>
      <DataTable.Header>
        <DataTable.HeaderSection>
          <DataTable.InputSearch />
        </DataTable.HeaderSection>
        <DataTable.HeaderSection>y</DataTable.HeaderSection>
      </DataTable.Header>
      <DataTable.Content
        queryId="colaboradores"
        dataSrc="/api/colaborador"
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
