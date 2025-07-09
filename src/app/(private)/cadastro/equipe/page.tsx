import { Metadata } from 'next';
import { Suspense } from 'react';

import { AppLayout } from '@/components';

import { EquipeTabela } from './_components/EquipeTabela';

export const metadata: Metadata = {
  title: 'Equipes',
};

export default function CadastroPage() {
  return (
    <>
      <AppLayout.Header
        title="Cadastro de equipes"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Equipes', href: '/cadastro/equipe' },
        ]}
      />
      <AppLayout.Content>
        <Suspense>
          <EquipeTabela />
        </Suspense>
      </AppLayout.Content>
    </>
  );
}
