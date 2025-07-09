import { Home } from 'lucide-react';
import Link from 'next/link';

import Button from '../Button';

interface ComponentProps {
  error?: string;
  message?: string;
}

export function NotFoundError({ error, message }: ComponentProps) {
  return (
    <div className="flex h-full justify-center bg-[url(/images/error-404-dog.png)] bg-size-[auto_50%] bg-bottom-right bg-no-repeat pt-40">
      <div>
        <h1 className="text-foreground text-center text-4xl font-bold">
          {error || 'Erro 404'}
        </h1>
        <p className="text-muted-foreground text-center text-xl">
          {message || 'Página não encontrada'}
        </p>
        <div className="mt-4 flex justify-center">
          <Link href="/">
            <Button icon={Home}>Voltar para o Início</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
