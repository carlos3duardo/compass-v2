import { Metadata } from 'next';

import { AppLayout } from '@/components';

export const metadata: Metadata = {
  title: 'Cadastro',
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
      <AppLayout.Content>Página de cadastro</AppLayout.Content>
    </>
  );
}
