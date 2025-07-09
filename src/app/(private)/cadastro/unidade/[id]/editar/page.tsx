import { AppLayout, Card } from '@/components';
import { capitalize } from '@/helpers';
import { getColaboradores, getUnidade } from '@/lib';

import { UnidadeFormulario } from '../../_components/UnidadeFormulario';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const unidade = await getUnidade({ id: id });

  if (!unidade) return null;

  return {
    title: `${capitalize(unidade.nome)} - Editar`,
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const unidade = await getUnidade({ id: id });

  if (!unidade) return <h3>404</h3>;

  const colaboradores = await getColaboradores({ all: true });

  return (
    <>
      <AppLayout.Header
        title={`Cargo: ${capitalize(unidade.nome)}`}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Unidades', href: '/cadastro/unidade' },
          {
            label: capitalize(unidade.nome),
            href: `/cadastro/unidade/${id}`,
          },
          { label: 'Editar', href: `/cadastro/unidade/${id}/editar` },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>Editar dados da unidade</Card.Title>
            </Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body nopadding>
            <UnidadeFormulario
              unidade={unidade}
              colaboradores={colaboradores}
            />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
