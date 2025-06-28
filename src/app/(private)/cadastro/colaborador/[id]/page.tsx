import { AppLayout, Card } from '@/components';
import { capitalize } from '@/helpers';
import { getColaborador } from '@/lib';

import { ColaboradorCabecalho } from '../components/ColaboradorCabecalho';
import { ColaboradorInfo } from '../components/ColaboradorInfo';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;

  const colaborador = await getColaborador(id);

  if (!colaborador) return null;

  return {
    title: capitalize(colaborador.usuario.nome),
  };
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;

  const colaborador = await getColaborador(id);

  if (!colaborador) return null;

  return (
    <>
      <AppLayout.Header
        title="Perfil do colaborador"
        breadcrumbs={[
          { label: 'Início', href: '/' },
          { label: 'Cadastro', href: '/cadastro' },
          { label: 'Colaboradores', href: '/cadastro/colaborador' },
          {
            label: capitalize(colaborador.usuario.nome),
            href: `/cadastro/colaborador/${id}`,
          },
        ]}
      />
      <AppLayout.Content>
        <Card.Root>
          <Card.Body>
            <ColaboradorCabecalho colaborador={colaborador} />
            <ColaboradorInfo colaborador={colaborador} />
          </Card.Body>
        </Card.Root>
      </AppLayout.Content>
    </>
  );
}
