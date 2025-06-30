import { AppLayout, Card } from '@/components';
import { capitalize } from '@/helpers';
import { getCargo } from '@/lib';

import { CargoFormulario } from '../../components/CargoFormulario';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const cargo = await getCargo({ id: id });

  if (!cargo) return null;

  return {
    title: `Editar cargo: ${capitalize(cargo.nome)}`,
    description: cargo?.descricao,
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const cargo = await getCargo({ id: id });

  if (!cargo) return null;

  return (
    <>
      <AppLayout.Header
        title={`Cargo: ${capitalize(cargo.nome)}`}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Cargos', href: '/cadastro/cargo' },
          {
            label: 'Visualizar cargo',
            href: `/cadastro/cargo/${id}`,
          },
          { label: 'Editar', href: `/cadastro/cargo/${id}/editar` },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>{capitalize(cargo.nome)}</Card.Title>
            </Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body nopadding>
            <CargoFormulario cargo={cargo} />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
