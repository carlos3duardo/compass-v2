'use client';

import Avvvatars from 'avvvatars-react';
import axios from 'axios';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

import { initials } from '@/helpers';
import { randomGradientColor } from '@/helpers/colors';
import { notification } from '@/lib/client';
import { ApiColaboradorProps } from '@/types';

interface ComponentProps {
  colaborador: ApiColaboradorProps;
}

export function ColaboradorCabecalho({ colaborador }: ComponentProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [avatarUrl, setAvatarUrl] = useState(colaborador.usuario.avatar_url);

  const [bgColor, setBgColor] = useState<string>(
    randomGradientColor({
      degrees: 135,
      fromColor: '#f1f1f1',
      toColor: '#e1e1e1',
    }),
  );

  useEffect(() => {
    setBgColor(randomGradientColor({ degrees: 135 }));
  }, []);

  const handleUploadClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    async (evt: ChangeEvent<HTMLInputElement>) => {
      if (!evt.target.files || !evt.target.files.length) {
        return;
      }

      const file = evt.target.files[0];
      const fileExt = file.name.split('.').pop()?.toLocaleLowerCase();

      if (!fileExt || !['png', 'jpg', 'jpeg', 'gif'].includes(fileExt)) {
        notification({
          type: 'error',
          message: 'Formato do arquivo inválido. Somente PNG, JPG, JPEG e GIF.',
        });

        return;
      }

      // Não pode ultrapassar 512kb
      if (file.size > 1024 * 512) {
        notification({
          type: 'error',
          message: 'A imagem não pode ultrapassar 512kb',
        });

        return;
      }

      axios
        .post(
          `/api/colaborador/${colaborador.id}/avatar`,
          { avatar: evt.target.files[0] },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then((response) => {
          const data = response.data.data;
          setAvatarUrl(data.url);
        })
        .catch((err) => {
          notification({
            type: 'error',
            message: err.message,
          });
        });
    },
    [colaborador.id],
  );

  return (
    <div
      className="relative min-h-[200px] rounded-md bg-slate-400"
      style={{ background: bgColor }}
    >
      <div className="absolute top-2 right-2">
        <button>menu</button>
      </div>
      <div className="absolute bottom-0 left-16 flex -translate-y-[-50%] flex-col gap-1">
        <figure className="bg-card ring-card h-48 w-48 rounded-full ring-4">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt="Imagem do usuário"
              priority={true}
              width={192}
              height={192}
              data-ativo={colaborador.situacao.ativo}
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                aspectRatio: '1 / 1',
              }}
              className="rounded-full transition duration-200 data-[ativo=false]:opacity-70 data-[ativo=false]:grayscale data-[ativo=false]:hover:opacity-100 data-[ativo=false]:hover:grayscale-0"
            />
          ) : (
            <Avvvatars
              value={colaborador.usuario.email}
              displayValue={initials(colaborador.usuario.nome)}
              size={192}
              radius={96}
            />
          )}
        </figure>
        <button
          title="Atualizar foto"
          className="bg-muted text-muted-foreground ring-card hover:bg-primary hover:text-primary-foreground absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center rounded-full ring-3 duration-200 hover:cursor-pointer"
          onClick={() => handleUploadClick()}
        >
          <Camera size={18} />
        </button>
        <input
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}
