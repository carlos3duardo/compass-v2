'use client';
import axios, { isAxiosError } from 'axios';
import { Trash } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';

import { Button, Card, Dialog } from '@/components';
import { maskCep, maskCnpj } from '@/helpers';
import { notification } from '@/lib/client';
import { ApiUnidadeProps } from '@/types';

interface ComponentProps {
  unidade: ApiUnidadeProps;
}

export function UnidadeView({ unidade }: ComponentProps) {
  const handleExcluirUnidade = useCallback(async () => {
    Dialog.ConfirmDelete.fire({
      title: 'Excluir unidade',
      text: 'Tem certeza que deseja excluir essa unidade?',
      confirmButtonText: 'Excluir',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        return axios
          .delete(`/api/unidade/${unidade.id}`)
          .then(() => {
            notification({
              message: 'Unidade excluida com sucesso',
              type: 'success',
            });
            window.location.href = '/cadastro/unidade';
          })
          .catch((error) => {
            if (isAxiosError(error)) {
              return error.response?.data.message;
            }
          });
      },
    });
  }, [unidade.id]);
  return (
    <>
      <Card.Root>
        <Card.Header>
          <Card.HeaderSection>
            <Card.Title>Informações da unidade</Card.Title>
          </Card.HeaderSection>
        </Card.Header>
        <Card.Separator />
        <Card.Grid>
          <Card.GridItem
            label="Nome"
            className="col-span-12 md:col-span-6 xl:col-span-5"
          >
            {unidade.nome}
          </Card.GridItem>
          <Card.GridItem
            label="Código"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          >
            {unidade.codigo || <>&nbsp;</>}
          </Card.GridItem>
          <Card.GridItem
            label="CNPJ"
            className="col-span-12 md:col-span-6 xl:col-span-3"
          >
            {maskCnpj(unidade.cnpj)}
          </Card.GridItem>

          <Card.GridItem
            label="Endereço"
            className="col-span-12 md:col-span-6 xl:col-span-5"
          >
            {unidade.logradouro || <>&nbsp;</>} {unidade.numero}{' '}
            {unidade.complemento}
          </Card.GridItem>
          <Card.GridItem
            label="Bairro"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          >
            {unidade.bairro}
          </Card.GridItem>
          <Card.GridItem
            label="CEP"
            className="col-span-12 md:col-span-6 xl:col-span-3"
          >
            {maskCep(unidade.cep)}
          </Card.GridItem>
          <Card.GridItem
            label="Município / UF"
            className="col-span-12 md:col-span-6 xl:col-span-5"
          >
            {unidade.municipio || <>&nbsp;</>} / {unidade.uf}
          </Card.GridItem>
          <Card.GridItem
            label="Responsável"
            className="col-span-12 md:col-span-6 xl:col-span-4"
          >
            {unidade.responsavel ? unidade.responsavel.nome : <>&nbsp;</>}
          </Card.GridItem>
          <Card.GridItem
            label="Situação"
            className="col-span-12 md:col-span-6 xl:col-span-3"
          >
            {unidade.ativo ? 'Ativa' : 'Inativa'}
          </Card.GridItem>
        </Card.Grid>
        <Card.Separator />
        <Card.Footer>
          <Card.FooterSection className="flex gap-2">
            <Link href={`/cadastro/unidade/${unidade.id}/editar`}>
              <Button>Editar</Button>
            </Link>
            <Link href={'/cadastro/unidade'}>
              <Button variant="ghost">Voltar</Button>
            </Link>
          </Card.FooterSection>
          <Card.FooterSection>
            <Button
              color="destructive"
              icon={Trash}
              onClick={() => handleExcluirUnidade()}
            >
              Excluir
            </Button>
          </Card.FooterSection>
        </Card.Footer>
      </Card.Root>
    </>
  );
}
