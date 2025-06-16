import { Metadata } from 'next';

import { AppLayout } from '@/components';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  const frases = [
    'Você está no caminho certo!',
    'Continue avançando. Você está brilhando!',
    'Cada passo conta. Continue firme!',
    'Seu esforço faz a diferença!',
    'O sucesso começa com um pequeno passo!',
    'Acredite em você, sempre!',
    'Seu trabalho duro está valendo a pena!',
    'Você é capaz de grandes coisas!',
    'Juntos, vamos mais longe!',
    'Vamos fazer acontecer!',
    'Energia positiva, resultados incríveis!',
    'Hoje é um ótimo dia para brilhar!',
    'Seja a mudança que você deseja ver!',
    'Determinação é a chave do sucesso!',
    'Pequenos passos, grandes conquistas!',
  ];

  const randomIndex = Math.floor(Math.random() * frases.length);

  const frase = frases[randomIndex];

  return (
    <>
      <AppLayout.Header title="Olá, Usuário" description={frase} />
      <AppLayout.Content>Dashboard</AppLayout.Content>
    </>
  );
}
