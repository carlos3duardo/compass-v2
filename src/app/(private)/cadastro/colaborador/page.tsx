import { Metadata } from 'next';

import { AppLayout } from '@/components';

import { ColaboradorTabela } from './components/ColaboradorTabela';

export const metadata: Metadata = {
  title: 'Colaboradores',
};

export default function CadastroPage() {
  return (
    <>
      <AppLayout.Header
        title="Cadastro de colaboradores"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Colaboradores', href: '/cadastro/colaborador' },
        ]}
      />
      <AppLayout.Content>
        <ColaboradorTabela />
      </AppLayout.Content>
    </>
  );
}
