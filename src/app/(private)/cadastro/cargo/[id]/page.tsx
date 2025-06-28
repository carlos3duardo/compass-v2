import { AppLayout, Card } from '@/components';
import { capitalize } from '@/helpers';
import { getCargo } from '@/lib';

import { Colaboradores } from './components/Colaboradores';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const cargo = await getCargo(id);

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
              <Card.Title>
                <div className="flex items-center gap-4">
                  {capitalize(cargo.nome)}
                  <span
                    data-value={cargo.situacao}
                    className="flex items-center gap-1 rounded border border-emerald-200 bg-emerald-100 px-1 text-xs text-emerald-400 data-[value=INATIVO]:border-red-200 data-[value=INATIVO]:bg-red-100 data-[value=INATIVO]:text-red-400 dark:border-emerald-800 dark:bg-emerald-900 dark:data-[value=INATIVO]:border-red-900 dark:data-[value=INATIVO]:bg-red-950"
                  >
                    <span
                      data-value={cargo.situacao}
                      className="h-1 w-1 rounded-full bg-emerald-400 data-[value=INATIVO]:bg-red-400"
                    />
                    {cargo.situacao}
                  </span>
                </div>
              </Card.Title>
            </Card.HeaderSection>
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
              <div className="w-full xl:w-1/2">
                <Colaboradores cargoId={id} />
              </div>
            </div>
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
