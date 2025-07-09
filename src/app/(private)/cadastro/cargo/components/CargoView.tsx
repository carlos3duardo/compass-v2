'use client';

import axios from 'axios';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Button, Card, Dialog } from '@/components';
import { capitalize } from '@/helpers';
import { notification } from '@/lib/client';
import { ApiCargoProps } from '@/types';

import { Colaboradores } from '../[id]/components/Colaboradores';

interface ComponentProps {
  cargo: ApiCargoProps;
}

export function CargoView({ cargo }: ComponentProps) {
  const router = useRouter();

  const handleDelete = useCallback(
    async (id: string) => {
      if (cargo.colaboradores && cargo.colaboradores.length > 0) {
        notification({
          message:
            'Cargo possui colaboradores cadastrados. Não é possível excluir.',
          type: 'warning',
        });

        return;
      }

      Dialog.ConfirmDelete.fire({
        title: 'Excluir cargo',
        text: 'Tem certeza que deseja excluir esse cargo?',
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          return axios
            .delete(`/api/cargo/${id}`)
            .then(() => {
              notification({
                message: 'Cargo excluido com sucesso',
                type: 'success',
              });
              router.push('/cadastro/cargo');
              return;
            })
            .catch((error) => {
              Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
            });
        },
      });
    },
    [cargo.colaboradores, router],
  );

  return (
    <Card.Root>
      <Card.Header>
        <Card.HeaderSection>
          <Card.Title>
            <div className="flex items-center gap-4">
              {capitalize(cargo.nome)}
              <span
                data-value={cargo.situacao}
                className="flex items-center gap-1 rounded border border-emerald-200 bg-emerald-100 px-1 text-xs text-emerald-400 data-[value=INATIVO]:border-red-200 data-[value=INATIVO]:bg-red-100 data-[value=INATIVO]:text-red-400 dark:border-emerald-800 dark:bg-emerald-900 dark:data-[value=INATIVO]:border-red-900 dark:data-[value=INATIVO]:bg-red-950"
              >
                <span
                  data-value={cargo.situacao}
                  className="h-1 w-1 rounded-full bg-emerald-400 data-[value=INATIVO]:bg-red-400"
                />
                {cargo.situacao}
              </span>
            </div>
          </Card.Title>
        </Card.HeaderSection>
        <Card.HeaderSection>
          <button
            type="button"
            className="flex h-8 min-w-8 items-center justify-center gap-1 rounded-md bg-red-100 px-2 text-sm text-red-400 transition duration-300 hover:cursor-pointer hover:bg-red-200"
            onClick={() => handleDelete(cargo.id)}
          >
            <Trash size={14} />
          </button>
        </Card.HeaderSection>
      </Card.Header>
      <Card.Separator />
      <Card.Body>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          {cargo.descricao ? (
            <div className="w-full xl:w-1/2">
              <strong>Descrição do cargo:</strong>
              <br />
              {cargo.descricao}
            </div>
          ) : (
            <div>
              <em>Cargo sem descrição</em>
            </div>
          )}
          <div className="w-full xl:w-1/2">
            {cargo.colaboradores && (
              <Colaboradores colaboradores={cargo.colaboradores} />
            )}
          </div>
        </div>
      </Card.Body>
      <Card.Separator />
      <Card.Footer>
        <Card.FooterSection>
          <div className="flex gap-2">
            <Link href={`/cadastro/cargo/${cargo.id}/editar`}>
              <Button>Editar</Button>
            </Link>
            <Link href={'/cadastro/cargo'}>
              <Button variant="outline">Voltar</Button>
            </Link>
          </div>
        </Card.FooterSection>
      </Card.Footer>
    </Card.Root>
  );
}
