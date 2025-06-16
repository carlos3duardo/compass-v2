import { Metadata } from 'next';
import Image from 'next/image';

import { FormRecuperarSenha } from './components/FormRecuperarSenha';

export const metadata: Metadata = {
  title: 'Esqueci minha senha',
};

export default function LoginPage() {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex">
        <figure className="after:bg-brand relative flex-1 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:opacity-20">
          <Image
            src="/images/senha-esqueci-background.jpg"
            fill={true}
            alt="logo"
            style={{ objectFit: 'cover' }}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </figure>
        <div className="bg-brand w-full md:w-[280px] lg:w-[280px] xl:w-[360px] 2xl:w-[420px]"></div>
      </div>

      <main className="relative flex min-h-dvh w-full items-center justify-center">
        <div className="container mx-auto flex flex-row-reverse">
          <FormRecuperarSenha />
        </div>
      </main>
    </>
  );
}
