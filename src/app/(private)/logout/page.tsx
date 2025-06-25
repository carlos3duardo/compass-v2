import { Metadata } from 'next';

import { AppLayout } from '@/components';

import { Logout } from './components/Logout';

export const metadata: Metadata = {
  title: 'Cadastro',
};

export default function CadastroPage() {
  return (
    <>
      <AppLayout.Header
        title="Sair do sistema"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Sair', href: '/logout' },
        ]}
      />
      <AppLayout.Content className="flex items-center justify-center">
        <Logout />
      </AppLayout.Content>
    </>
  );
}
