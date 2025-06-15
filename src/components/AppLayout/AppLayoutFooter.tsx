import Image from 'next/image';
import Link from 'next/link';

export function AppLayoutFooter() {
  return (
    <footer className="flex h-12 items-center justify-between px-8 text-sm font-medium text-slate-400">
      <div>{new Date().getFullYear()} &copy; Todos os direitos reservados.</div>
      <div className="flex items-center gap-4">
        <Link href="#">Termos de uso</Link>
        <Link href="#">Política de privacidade</Link>
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
