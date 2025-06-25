import { Metadata } from 'next';

import { AppLayout } from '@/components';

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
      <AppLayout.Content>Equipes</AppLayout.Content>
    </>
  );
}
