import { Metadata } from 'next';
import { Suspense } from 'react';

import { AppLayout } from '@/components';

import { UnidadeTabela } from './_components/UnidadeTabela';

export const metadata: Metadata = {
  title: 'Unidades',
};

export default function Page() {
  return (
    <>
      <AppLayout.Header
        title="Cadastro de unidades"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Unidades', href: '/cadastro/unidade' },
        ]}
      />
      <AppLayout.Content>
        <Suspense>
          <UnidadeTabela />
        </Suspense>
      </AppLayout.Content>
    </>
  );
}
