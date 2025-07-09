import Image from 'next/image';
import Link from 'next/link';

export function AppLayoutFooter() {
  return (
    <footer className="flex items-center justify-between gap-4 px-4 py-3 text-sm font-medium text-slate-400 lg:px-6 2xl:px-8">
      <div className="info flex w-full flex-col md:flex-row md:justify-between">
        <div className="copyright">
          {new Date().getFullYear()} &copy; Todos os direitos reservados.
        </div>
        <div className="links">
          <div className="flex gap-4">
            <Link href="#">Termos de uso</Link>
            <Link href="#">Política de privacidade</Link>
          </div>
        </div>
      </div>
      <div className="about">
        <Link href="https://bussoladagestao.com.br" target="_blank">
          <Image
            src="/images/by-bussola-da-gestao.svg"
            width={18}
            height={18}
            alt="Desenvolvido pela Bússola da Gestão"
            title="Desenvolvido pela Bússola da Gestão"
            className="opacity-30 brightness-0 transition duration-200 hover:opacity-100 hover:brightness-100 dark:opacity-30 dark:invert dark:hover:opacity-100 dark:hover:invert-0"
          />
        </Link>
      </div>
    </footer>
  );
}
