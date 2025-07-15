import { AppLayout } from '@/components';
import { capitalize } from '@/helpers';
import { getSetor } from '@/lib';

import { SetorView } from '../components/SetorView';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  const setor = await getSetor({ id: id, relationships: ['colaboradores'] });

  if (!setor) return null;

  return {
    title: capitalize(setor.nome),
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  const setor = await getSetor({ id: id, relationships: ['colaboradores'] });

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
        <SetorView setor={setor} />
      </AppLayout.Content>
    </>
  );
}
