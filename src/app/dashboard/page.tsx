import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ModeToggle, NavigationMenu, Notifications } from '@/components';
import { UserMenu } from '@/components/Header/UserMenu';
import { primaryMenu, secondaryMenu } from '@/data';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-dvh items-stretch">
      <aside className="bg-sidebar fixed top-0 bottom-0 hidden flex-col gap-2 shadow lg:flex lg:w-[240px] xl:w-[260px] 2xl:w-[300px] dark:bg-slate-900 dark:shadow-none">
        <header className="flex h-24 items-stretch justify-center px-14 py-3">
          <figure className="flex justify-center">
            <Image
              src="/images/logo-bussoladagestao-light-mode.svg"
              width={207}
              height={64}
              alt="Logotipo da Bússola da Gestão"
              className="block dark:hidden"
            />
            <Image
              src="/images/logo-bussoladagestao-dark-mode.svg"
              width={207}
              height={64}
              alt="Logotipo da Bússola da Gestão"
              className="hidden dark:block"
            />
          </figure>
        </header>
        <div className="mb-2 flex flex-1 flex-col justify-between gap-4">
          <NavigationMenu menu={primaryMenu} />
          <NavigationMenu menu={secondaryMenu} />
        </div>
      </aside>
      <div className="relative flex flex-1 flex-col justify-between gap-2 lg:ml-[250px] xl:ml-[270px] 2xl:ml-[310px]">
        <header className="sticky top-0 right-0 left-0 flex h-20 items-center justify-between gap-4 px-8">
          <div className="bg-background/85 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-[4px]" />
          <div className="relative flex w-full items-center justify-between">
            <div>
              <h1 className="text-foreground text-xl font-semibold">
                Olá, Usuário.
              </h1>
              <p className="text-foreground/60 text-sm font-medium">
                Frase motivacional ou de boas-vindas aqui.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div role="menu" className="flex items-center gap-1 rounded p-1">
                <Notifications />
                <ModeToggle />
              </div>
              <UserMenu />
            </div>
          </div>
        </header>
        <main className="flex-1 px-8">
          <p>Dashboard</p>
        </main>
        <footer className="flex h-12 items-center justify-between px-8 text-sm font-medium text-slate-400">
          <div>
            {new Date().getFullYear()} &copy; Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#">Termos de uso</Link>
            <Link href="#">Política de privacidade</Link>
            <Link href="#">Dev</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
