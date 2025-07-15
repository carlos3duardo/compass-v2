'use client';

import axios from 'axios';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Button, Card, Dialog, Tooltip } from '@/components';
import { notification } from '@/lib/client';
import { ApiSetorProps } from '@/types';

import { SetorColaboradores } from './SetorColaboradores';

interface ComponentProps {
  setor: ApiSetorProps;
}

export function SetorView({ setor }: ComponentProps) {
  const router = useRouter();

  const handleDelete = useCallback(async (id: string) => {
    Dialog.ConfirmDelete.fire({
      title: 'Excluir setor',
      text: 'Tem certeza que deseja excluir esse setor?',
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return axios
          .delete(`/api/setor/${id}`)
          .then(() => {
            notification({
              message: 'Setor excluido com sucesso',
              type: 'success',
            });
            router.push('/cadastro/setor');
            return;
          })
          .catch((error) => {
            Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
          });
      },
    });
  }, []);

  return (
    <Card.Root>
      <Card.Header>
        <Card.HeaderSection>
          <Card.Title>Dados do setor</Card.Title>
        </Card.HeaderSection>
      </Card.Header>
      <Card.Separator />
      <Card.Body>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <div className="w-full xl:w-1/2">
            <Card.Grid className="px-0 py-0 xl:px-0">
              <Card.GridItem label="Nome" className="xl:col-span-8">
                {setor.nome}
              </Card.GridItem>
              <Card.GridItem label="Situação" className="xl:col-span-4">
                {setor.ativo ? 'ATIVO' : 'INATIVO'}
              </Card.GridItem>
              <Card.GridItem label="Responsável" className="xl:col-span-4">
                {setor.responsavel ? setor.responsavel.nome : 'N/A'}
              </Card.GridItem>
            </Card.Grid>
          </div>
          <div className="w-full xl:w-1/2">
            <SetorColaboradores colaboradores={setor.colaboradores || []} />
          </div>
        </div>
      </Card.Body>
      <Card.Separator />
      <Card.Footer>
        <Card.FooterSection>
          <div className="flex gap-2">
            <Link href={`/cadastro/setor/${setor.id}/editar`}>
              <Button>Editar</Button>
            </Link>
            <Link href={'/cadastro/setor'}>
              <Button variant="outline">Voltar</Button>
            </Link>
          </div>
        </Card.FooterSection>
        <Card.FooterSection>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button
                color="destructive"
                icon={Trash}
                onClick={() => handleDelete(setor.id)}
                disabled={setor.colaboradores && setor.colaboradores.length > 0}
              >
                Excluir
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {setor.colaboradores && setor.colaboradores.length > 0
                ? 'Não é possível excluir setor com colaboradores cadastrados.'
                : 'Excluir setor'}
            </Tooltip.Content>
          </Tooltip.Root>
        </Card.FooterSection>
      </Card.Footer>
    </Card.Root>
  );
}
