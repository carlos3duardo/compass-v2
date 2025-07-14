'use client';

import Avvvatars from 'avvvatars-react';
import axios from 'axios';
import { X } from 'lucide-react';
import Image from 'next/image';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Dialog, Input, Modal } from '@/components';
import { initials } from '@/helpers';
import { useColaboradorList } from '@/hooks';
import { notification } from '@/lib/client';
import { ApiEquipeProps } from '@/types';

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

type ItemBuscaProps = {
  id: string;
  nome: string;
  avatar_url: string | null;
};

interface ComponentProps {
  titulo?: string;
  equipe: ApiEquipeProps;
  membros: ColaboradorProps[];
  updateMembros: Dispatch<SetStateAction<ColaboradorProps[]>>;
}

export function AdicionarColaboradores({
  titulo,
  equipe,
  membros,
  updateMembros,
}: ComponentProps) {
  // const [membros, setMembros] = useState<ColaboradorProps[]>(listaInicial);
  const [sugestoes, setSugestoes] = useState<ItemBuscaProps[]>([]);
  const [busca, setBusca] = useState<string>('');

  const { data: colaboradores } = useColaboradorList();

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
            .delete(`/api/equipe/${equipe.id}/colaborador/${id}`)
            .then(() => {
              notification({
                message: 'Colaborador removido com sucesso',
                type: 'success',
              });

              updateMembros((prev) => prev.filter((col) => col.id !== id));
            })
            .catch((error) => {
              Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
            });
        },
      });
    },
    [equipe.id, updateMembros],
  );

  useEffect(() => {
    const membrosId = membros.map((m) => m.id);

    if (busca.length >= 1 && colaboradores) {
      const filtrados = colaboradores
        ?.filter((colab) => !membrosId.includes(colab.id))
        .filter((colab) =>
          colab.usuario.nome.toLowerCase().includes(busca.toLowerCase()),
        )
        .map((colab) => ({
          id: colab.id,
          nome: colab.usuario.nome,
          avatar_url: colab.usuario.avatar_url,
        }));
      setSugestoes(filtrados);
    } else {
      setSugestoes([]);
    }
  }, [busca, colaboradores, membros]);

  const handleAdicionaColaborador = useCallback(
    async (colaboradorId: string) => {
      const novoMembro = colaboradores?.find(
        (colab) => colab.id === colaboradorId,
      );

      if (!novoMembro) return;

      await axios
        .post(`/api/equipe/${equipe.id}/colaborador/`, {
          colaborador_id: novoMembro.id,
        })
        .then(() => {
          notification({
            message: 'Colaborador adicionado com sucesso.',
            type: 'success',
          });

          updateMembros([
            ...membros,
            {
              id: novoMembro!.id,
              nome: novoMembro!.usuario.nome,
              email: novoMembro!.usuario.email,
              avatar_url: novoMembro!.usuario.avatar_url,
              situacao: {
                id: novoMembro!.situacao.id,
                nome: novoMembro!.situacao.nome,
                ativo: novoMembro!.situacao.ativo,
                login: novoMembro!.situacao.pode_acessar,
              },
            },
          ]);
        })
        .catch((error) => {
          Dialog.Confirm.showValidationMessage(`Erro: ${error.message}`);
        });

      setBusca('');
    },
    [colaboradores, equipe.id, membros, updateMembros],
  );

  return (
    <>
      <Modal.Header title={titulo || 'Gerenciar membros da equipe'} />
      <Modal.Body className="w-[1020px]">
        <div className="flex flex-col gap-4">
          {membros.length > 0 ? (
            <ul className="grid grid-cols-3 gap-2">
              {membros.map((membro) => (
                <li
                  key={membro.id}
                  className="bg-muted flex items-center justify-between rounded p-2"
                >
                  <div className="flex items-center gap-2">
                    <figure className="w-[38px]">
                      {membro.avatar_url ? (
                        <Image
                          src={
                            membro.avatar_url ||
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
                          value={membro.email}
                          displayValue={initials(membro.nome)}
                          size={38}
                        />
                      )}
                    </figure>
                    <div className="text-sm leading-none">
                      <span className="font-medium">{membro.nome}</span>
                    </div>
                  </div>
                  <button
                    className="bg-destructive/10 text-destructive hover:bg-destructive/30 flex h-6 w-6 items-center justify-center rounded hover:cursor-pointer"
                    title="Remover membro"
                    onClick={() =>
                      handleRemoveColaborador(membro.id, membro.nome)
                    }
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <>...</>
          )}
          <div>
            <Input
              id="busca"
              type="text"
              placeholder="Digite o nome do colaborador"
              onChange={(e) => setBusca(e.target.value)}
              value={busca}
            />
            <div className="bg-muted h-48 overflow-y-auto">
              {sugestoes.length === 0 ? (
                <div className="flex h-[inherit] items-center justify-center p-4 text-center text-sm">
                  Faça uma busca por colaborador
                  <br />
                  (Mínimo de 3 caracteres)
                </div>
              ) : (
                <ul className="flex h-[inherit] flex-col gap-1 bg-white py-2">
                  {sugestoes.map((sugestao) => (
                    <li
                      key={sugestao.id}
                      className="bg-muted hover:bg-primary/20 px-2 py-2 text-sm hover:cursor-pointer"
                      onClick={() => handleAdicionaColaborador(sugestao.id)}
                    >
                      {sugestao.nome}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
    </>
  );
}
