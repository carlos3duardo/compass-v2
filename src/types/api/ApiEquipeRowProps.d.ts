export type ApiEquipeRowProps = {
  id: string;
  nome: string;
  membros_count: number;
  tipo: string | null;
  level: number;
  path: string;
  superior: {
    id: string;
    nome: string;
  } | null;
  ativa: boolean;
};
