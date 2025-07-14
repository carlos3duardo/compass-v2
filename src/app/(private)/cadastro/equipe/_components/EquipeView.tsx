'use client';

import axios from 'axios';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Button, Card, Dialog } from '@/components';
import { notification } from '@/lib/client';
import { ApiEquipeProps } from '@/types';

import { Colaboradores } from './Colaboradores';

interface ComponentProps {
  equipe: ApiEquipeProps;
}

export function EquipeView({ equipe }: ComponentProps) {
  const router = useRouter();

  const handleDelete = useCallback(
    async (id: string) => {
      if (equipe.colaboradores && equipe.colaboradores.length > 0) {
        notification({
          message:
            'Equipe possui colaboradores cadastrados. Não é possível excluir.',
          type: 'warning',
        });

        return;
      }

      Dialog.ConfirmDelete.fire({
        title: 'Excluir equipe',
        text: 'Tem certeza que deseja excluir esse equipe?',
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          return axios
            .delete(`/api/equipe/${id}`)
            .then(() => {
              notification({
                message: 'Equipe excluida com sucesso',
                type: 'success',
              });
              router.push('/cadastro/equipe');
              return;
            })
            .catch((error) => {
              Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
            });
        },
      });
    },
    [equipe.colaboradores, router],
  );

  return (
    <Card.Root>
      <Card.Header>
        <Card.HeaderSection>
          <Card.Title>Dados da equipe</Card.Title>
        </Card.HeaderSection>
      </Card.Header>
      <Card.Separator />
      <Card.Body>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="w-full xl:w-1/2">
            <Card.Grid className="px-0 py-0 xl:px-0">
              <Card.GridItem label="Nome" className="xl:col-span-8">
                {equipe.nome}
              </Card.GridItem>
              <Card.GridItem label="Situação" className="xl:col-span-4">
                {equipe.ativa ? 'ATIVA' : 'INATIVA'}
              </Card.GridItem>
              <Card.GridItem label="Equipe superior" className="xl:col-span-4">
                {equipe.equipe_superior
                  ? equipe.equipe_superior.nome
                  : 'Não possui'}
              </Card.GridItem>
            </Card.Grid>
          </div>
          <div className="w-full xl:w-1/2">
            {equipe.colaboradores && (
              <Colaboradores
                equipeId={equipe.id}
                colaboradores={equipe.colaboradores}
              />
            )}
          </div>
        </div>
      </Card.Body>
      <Card.Separator />
      <Card.Footer>
        <Card.FooterSection>
          <div className="flex gap-2">
            <Link href={`/cadastro/equipe/${equipe.id}/editar`}>
              <Button>Editar</Button>
            </Link>
            <Link href={'/cadastro/equipe'}>
              <Button variant="outline">Voltar</Button>
            </Link>
          </div>
        </Card.FooterSection>
        <Card.FooterSection>
          <Button
            color="destructive"
            icon={Trash}
            onClick={() => handleDelete(equipe.id)}
          >
            Excluir
          </Button>
        </Card.FooterSection>
      </Card.Footer>
    </Card.Root>
  );
}
