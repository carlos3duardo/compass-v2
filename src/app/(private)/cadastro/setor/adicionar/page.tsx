import { Metadata } from 'next';

import { AppLayout, Card } from '@/components';
import { getColaboradores } from '@/lib';

import { SetorFormulario } from '../components/SetorFormulario';

export const metadata: Metadata = {
  title: 'Adicionar setor',
};

export default async function Page() {
  const colaboradores = await getColaboradores({ all: true });

  return (
    <>
      <AppLayout.Header
        title="Adicionar setor"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Setores', href: '/cadastro/setor' },
          {
            label: 'Adicionar',
            href: '/cadastro/setor/adicionar',
          },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>Insira os dados da unidade</Card.Title>
            </Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body nopadding>
            <SetorFormulario colaboradores={colaboradores} />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
