import { AppLayout } from '@/components';
import { capitalize } from '@/helpers';
import { getUnidade } from '@/lib';

import { UnidadeView } from '../_components/UnidadeView';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const unidade = await getUnidade({ id: id });

  if (!unidade) return null;

  return {
    title: capitalize(unidade.nome),
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const unidade = await getUnidade({ id: id });

  if (!unidade) return null;

  return (
    <>
      <AppLayout.Header
        title={`Cargo: ${capitalize(unidade.nome)}`}
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Unidades', href: '/cadastro/unidade' },
          {
            label: 'Visualizar unidade',
            href: `/cadastro/unidade/${id}`,
          },
        ]}
      />
      <AppLayout.Content>
        <UnidadeView unidade={unidade} />
      </AppLayout.Content>
    </>
  );
}
