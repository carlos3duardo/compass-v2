import { AppLayout, Card } from '@/components';
import { capitalize } from '@/helpers';
import { getEquipe } from '@/lib';
import { getEquipes } from '@/lib/api/getEquipes';

import { EquipeFormulario } from '../../_components/EquipeFormulario';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const equipe = await getEquipe({ id: id });

  if (!equipe) return null;

  return {
    title: `Editar equipe: ${capitalize(equipe.nome)}`,
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const equipe = await getEquipe({ id: id, relationships: ['colaboradores'] });

  const equipesSuperior = await getEquipes();

  if (!equipe) return null;

  return (
    <>
      <AppLayout.Header
        title={`Equipe: ${capitalize(equipe.nome)}`}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Equipes', href: '/cadastro/equipe' },
          {
            label: capitalize(equipe.nome),
            href: `/cadastro/equipe/${id}`,
          },
          {
            label: 'Editar',
            href: `/cadastro/equipe/${id}/editar`,
          },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>Dados da equipe</Card.Title>
            </Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body nopadding>
            <EquipeFormulario equipe={equipe} superiores={equipesSuperior} />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
