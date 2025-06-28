import Avvvatars from 'avvvatars-react';
import Image from 'next/image';
import Link from 'next/link';

import { initials } from '@/helpers';
import { getColaboradores } from '@/lib';

interface ComponentProps {
  cargoId: string;
}

export async function Colaboradores({ cargoId }: ComponentProps) {
  const colaboradores = await getColaboradores({ cargoId, all: true });

  return (
    <div className="bg-muted rounded p-4 2xl:p-6">
      <strong>Colaboradores</strong>
      {colaboradores.length >= 1 ? (
        <ul className="mt-4 grid grid-cols-2 gap-4">
          {colaboradores
            .filter((col) => col.situacao.ativo)
            .map((colaborador) => (
              <li
                key={colaborador.id}
                className="col-span-2 flex items-center gap-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
              >
                <figure className="w-[38px]">
                  {colaborador.usuario.avatar_url ? (
                    <Image
                      src={
                        colaborador.usuario.avatar_url ||
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
                      value={colaborador.usuario.email}
                      displayValue={initials(colaborador.usuario.nome)}
                      size={38}
                    />
                  )}
                </figure>
                <div className="text-sm leading-none">
                  <Link href={`/cadastro/colaborador/${colaborador.id}`}>
                    <span className="font-medium">
                      {colaborador.usuario.nome}
                    </span>
                    <br />
                    {colaborador.usuario.email}
                  </Link>
                </div>
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
