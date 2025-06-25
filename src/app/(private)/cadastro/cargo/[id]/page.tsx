import { AppLayout, Card } from '@/components';
import { capitalize } from '@/helpers';
import { getCargo } from '@/lib';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const cargo = await getCargo(params.id);

  if (!cargo) return null;

  return {
    title: capitalize(cargo.nome),
    description: cargo?.descricao,
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;

  const cargo = await getCargo(id);

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
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Header>
            <Card.HeaderSection>
              <Card.Title>{capitalize(cargo.nome)}</Card.Title>
            </Card.HeaderSection>
            <Card.HeaderSection>{cargo.situacao}</Card.HeaderSection>
          </Card.Header>
          <Card.Separator />
          <Card.Body>
            <div className="flex w-full flex-col gap-6 lg:flex-row">
              {cargo.descricao ? (
                <div className="w-full xl:w-1/2">
                  <strong>Descrição do cargo:</strong>
                  <br />
                  {cargo.descricao}
                </div>
              ) : (
                <div>
                  <em>Cargo sem descrição</em>
                </div>
              )}
              <div className="w-full xl:w-1/2">Colaboradores</div>
            </div>
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
