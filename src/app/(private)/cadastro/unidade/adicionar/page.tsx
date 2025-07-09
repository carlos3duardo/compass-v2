import { Metadata } from 'next';

import { AppLayout, Card } from '@/components';
import { getColaboradores } from '@/lib';

import { UnidadeFormulario } from '../_components/UnidadeFormulario';

export const metadata: Metadata = {
  title: 'Adicionar unidade',
};

export default async function Page() {
  const colaboradores = await getColaboradores({ all: true });

  return (
    <>
      <AppLayout.Header
        title="Adicionar unidade"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Unidades', href: '/cadastro/unidade' },
          {
            label: 'Adicionar',
            href: '/cadastro/unidade/adicionar',
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
            <UnidadeFormulario colaboradores={colaboradores} />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
