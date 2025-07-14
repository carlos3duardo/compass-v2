import { AppLayout, Card } from '@/components';
import { getEquipes } from '@/lib/api/getEquipes';

import { EquipeFormulario } from '../_components/EquipeFormulario';

export async function generateMetadata() {
  return {
    title: 'Adicionar equipe',
  };
}

export default async function Page() {
  const equipesSuperior = await getEquipes();

  return (
    <>
      <AppLayout.Header
        title={'Adicionar equipe'}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Equipes', href: '/cadastro/equipe' },
          { label: 'Adicionar', href: '/cadastro/equipe/adicionar' },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>Nova equipe</Card.Title>
              <Card.Description>
                Insira os dados da nova equipe
              </Card.Description>
            </Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body nopadding>
            <EquipeFormulario superiores={equipesSuperior} />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
