import { Metadata } from 'next';

import { AppLayout } from '@/components';

export const metadata: Metadata = {
  title: 'Unidades',
};

export default function CadastroPage() {
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
      <AppLayout.Content>Unidades</AppLayout.Content>
    </>
  );
}
