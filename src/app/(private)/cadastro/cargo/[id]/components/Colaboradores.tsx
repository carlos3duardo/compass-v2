import Avvvatars from 'avvvatars-react';
import Image from 'next/image';
import Link from 'next/link';

import { initials } from '@/helpers';

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
  colaboradores: ColaboradorProps[];
}

export function Colaboradores({ colaboradores }: ComponentProps) {
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
