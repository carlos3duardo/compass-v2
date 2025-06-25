'use client';

import Avvvatars from 'avvvatars-react';
import { Funnel } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { DataTable, DataTableColumnProps, DropdownMenu } from '@/components';
import { initials } from '@/helpers';
import { useColaboradorSituacao } from '@/hooks/useColaboradorSituacao';
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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { data: situacoes } = useColaboradorSituacao({
    onlyInUse: true,
  });

  const situacaoId = searchParams.has('situacaoId')
    ? searchParams.get('situacaoId')?.split(',')
    : [];

  const handleSituacaoIdFilterChange = useCallback(
    (situacaoId: string) => {
      const params = new URLSearchParams(searchParams);

      if (
        searchParams.has('situacaoId') &&
        searchParams.get('situacaoId') === situacaoId
      ) {
        params.delete('situacaoId');
      } else {
        params.set('situacaoId', situacaoId);
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams],
  );

  return (
    <DataTable.Root>
      <DataTable.Header>
        <DataTable.HeaderSection>
          <DataTable.InputSearch />
        </DataTable.HeaderSection>
        <DataTable.HeaderSection>
          {situacoes && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  className="btn btn-primary text-muted-foreground bg-muted flex h-8 w-8 items-center justify-center rounded-[6px] hover:cursor-pointer"
                >
                  <Funnel size={16} />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                <DropdownMenu.Arrow />
                <DropdownMenu.Label>Situação</DropdownMenu.Label>
                <DropdownMenu.Group>
                  {situacoes.map((situacao) => {
                    return (
                      <DropdownMenu.CheckboxItem
                        key={situacao.id}
                        checked={
                          situacaoId && situacaoId.includes(String(situacao.id))
                        }
                        onClick={() =>
                          handleSituacaoIdFilterChange(situacao.id)
                        }
                      >
                        {situacao.nome} ({situacao.qtde_colaboradores})
                      </DropdownMenu.CheckboxItem>
                    );
                  })}
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
        </DataTable.HeaderSection>
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
