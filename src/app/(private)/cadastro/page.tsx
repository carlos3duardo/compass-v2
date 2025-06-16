import { Metadata } from 'next';

import { AppLayout } from '@/components';

export const metadata: Metadata = {
  title: 'Cadastro',
};

export default function CadastroPage() {
  return (
    <>
      <AppLayout.Header
        title="Central de cadastros"
        description="Visualize e gerencie os dados cadastrados"
      />
      <AppLayout.Content>Página de cadastro</AppLayout.Content>
    </>
  );
}
