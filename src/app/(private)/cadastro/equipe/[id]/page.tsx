import { AppLayout } from '@/components';
import { capitalize } from '@/helpers';
import { getEquipe } from '@/lib';

import { EquipeView } from '../_components/EquipeView';
type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const equipe = await getEquipe({ id: id, relationships: ['colaboradores'] });

  if (!equipe) return null;

  return {
    title: capitalize(equipe.nome),
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const equipe = await getEquipe({ id: id, relationships: ['colaboradores'] });

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
            label: 'Visualizar equipe',
            href: `/cadastro/equipe/${id}`,
          },
        ]}
      />
      <AppLayout.Content>
        <EquipeView equipe={equipe} />
      </AppLayout.Content>
    </>
  );
}
