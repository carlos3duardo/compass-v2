type ColaboradorProps = {
  id: string;
  nome: string;
  email: string;
  avatar_url: string | null;
  situacao: {
    id: string;
    nome: string;
    cor: string;
    ativo: boolean;
    login: boolean;
  };
};

export type ApiEquipeProps = {
  id: string;
  nome: string;
  membros_count: number;
  tipo: string | null;
  level: number;
  path: string;
  equipe_superior: {
    id: string;
    nome: string;
  } | null;
  ativa: boolean;
  colaboradores: ColaboradorProps[];
};
