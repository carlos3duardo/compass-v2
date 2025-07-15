import { AppLayout, Card } from '@/components';
import { capitalize } from '@/helpers';
import { getColaboradores, getSetor } from '@/lib';

import { SetorFormulario } from '../../components/SetorFormulario';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const setor = await getSetor({ id: id });

  if (!setor) return null;

  return {
    title: capitalize(setor.nome),
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const setor = await getSetor({ id: id });
  const colaboradores = await getColaboradores({ all: true });

  if (!setor) return null;

  return (
    <>
      <AppLayout.Header
        title={`Setor: ${capitalize(setor.nome)}`}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Setores', href: '/cadastro/setor' },
          {
            label: 'Visualizar setor',
            href: `/cadastro/setor/${id}`,
          },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>{capitalize(setor.nome)}</Card.Title>
            </Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body nopadding>
            <SetorFormulario setor={setor} colaboradores={colaboradores} />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
