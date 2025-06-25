import { Metadata } from 'next';

import { AppLayout } from '@/components';

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
      <AppLayout.Content>Setores</AppLayout.Content>
    </>
  );
}
