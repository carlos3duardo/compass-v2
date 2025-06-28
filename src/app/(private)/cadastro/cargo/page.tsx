import { Metadata } from 'next';
import { Suspense } from 'react';

import { AppLayout } from '@/components';

import { CargoTabela } from './components/CargoTabela';

export const metadata: Metadata = {
  title: 'Cargos',
};

export default function CadastroPage() {
  return (
    <>
      <AppLayout.Header
        title="Cadastro de cargos"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Cargos', href: '/cadastro/cargo' },
        ]}
      />
      <AppLayout.Content>
        <Suspense>
          <CargoTabela />
        </Suspense>
      </AppLayout.Content>
    </>
  );
}
