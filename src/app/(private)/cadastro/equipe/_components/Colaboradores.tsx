'use client';

import Avvvatars from 'avvvatars-react';
import axios from 'axios';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Button, Dialog, Modal } from '@/components';
import { initials } from '@/helpers';
import { notification } from '@/lib/client';

import { AdicionarColaboradores } from './AdicionarColaboradores';

type ColaboradorProps = {
  id: string;
  nome: string;
  email: string;
  avatar_url: string | null;
  situacao: {
    id: string;
    nome: string;
    ativo: boolean;
    login: boolean;
  };
};

interface ComponentProps {
  equipeId: string;
  colaboradores: ColaboradorProps[];
}

export function Colaboradores({ equipeId, colaboradores }: ComponentProps) {
  const [membros, setMembros] = useState<ColaboradorProps[]>(colaboradores);

  const handleRemoveColaborador = useCallback(
    (id: string, nome: string) => {
      Dialog.ConfirmDelete.fire({
        title: 'Remover membro da equipe',
        html: `Confirma remover <strong>${nome}</strong> da equipe?`,
        confirmButtonText: 'Remover',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          return axios
            .delete(`/api/equipe/${equipeId}/colaborador/${id}`)
            .then(() => {
              notification({
                message: 'Colaborador removido com sucesso',
                type: 'success',
              });

              setMembros((prev) => prev.filter((col) => col.id !== id));
            })
            .catch((error) => {
              Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
            });
        },
      });
    },
    [equipeId],
  );

  return (
    <div className="bg-muted rounded p-4 2xl:p-6">
      <header className="flex items-center justify-between gap-4 border-b border-slate-300 pb-4">
        <h3>
          <strong>Colaboradores</strong>
        </h3>
        <Modal.Root>
          <Modal.Trigger id="equipe-adicionar-colaboradores">
            <Button size="sm">Gerenciar membros</Button>
          </Modal.Trigger>
          <Modal.Container>
            <AdicionarColaboradores />
          </Modal.Container>
        </Modal.Root>
      </header>
      {membros.length >= 1 ? (
        <ul className="mt-4 grid grid-cols-2 gap-4">
          {membros
            .filter((col) => col.situacao.ativo)
            .map((colaborador) => (
              <li
                key={colaborador.id}
                className="col-span-2 flex w-full items-center justify-between gap-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
              >
                <div className="flex items-center gap-2">
                  <figure className="w-[38px]">
                    {colaborador.avatar_url ? (
                      <Image
                        src={
                          colaborador.avatar_url ||
                          '/images/avatar-placeholder.jpg'
                        }
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
                        value={colaborador.email}
                        displayValue={initials(colaborador.nome)}
                        size={38}
                      />
                    )}
                  </figure>
                  <div className="text-sm leading-none">
                    <Link href={`/cadastro/colaborador/${colaborador.id}`}>
                      <span className="font-medium">{colaborador.nome}</span>
                      <br />
                      {colaborador.email}
                    </Link>
                  </div>
                </div>
                <button
                  className="bg-destructive/10 text-destructive hover:bg-destructive/30 flex h-6 w-6 items-center justify-center rounded hover:cursor-pointer"
                  title="Remover colaborador"
                  onClick={() =>
                    handleRemoveColaborador(colaborador.id, colaborador.nome)
                  }
                >
                  <X size={14} />
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <div className="text-muted-foreground mt-4">
          Nenhum colaborador ativo neste cargo
        </div>
      )}
    </div>
  );
}
