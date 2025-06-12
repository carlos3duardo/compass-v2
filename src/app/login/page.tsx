import Image from 'next/image';

import { LoginForm } from './components/login-form';

export default function LoginPage() {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex">
        <div className="bg-primary w-full md:w-[280px] lg:w-[280px] xl:w-[360px] 2xl:w-[420px]"></div>
        <figure className="after:bg-primary relative flex-1 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:opacity-20">
          <Image
            src="/images/login-background-1.jpg"
            fill={true}
            alt="logo"
            style={{ objectFit: 'cover' }}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </figure>
      </div>
      <main className="relative flex min-h-dvh w-full items-center justify-center">
        <div className="container mx-auto">
          <LoginForm />
        </div>
      </main>
    </>
  );
}
