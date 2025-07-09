import { AppLayout, Card } from '@/components';

import { CargoFormulario } from '../components/CargoFormulario';

export async function generateMetadata() {
  return {
    title: 'Adicionar cargo',
  };
}

export default async function Page() {
  return (
    <>
      <AppLayout.Header
        title={'Adicionar cargo'}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Cargos', href: '/cadastro/cargo' },
          { label: 'Adicionar', href: '/cadastro/cargo/adicionar' },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>Novo cargo</Card.Title>
              <Card.Description>Insira os dados do novo cargo</Card.Description>
            </Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body nopadding>
            <CargoFormulario />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
