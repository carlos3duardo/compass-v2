import { Metadata } from 'next';
import { Suspense } from 'react';

import { AppLayout } from '@/components';

import { SetorTabela } from './components/SetorTabela';

export const metadata: Metadata = {
  title: 'Setores',
};

export default function CadastroPage() {
  return (
    <>
      <AppLayout.Header
        title="Cadastro de setores"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Setores', href: '/cadastro/setor' },
        ]}
      />
      <AppLayout.Content>
        <Suspense>
          <SetorTabela />
        </Suspense>
      </AppLayout.Content>
    </>
  );
}
