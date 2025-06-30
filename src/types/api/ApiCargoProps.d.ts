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

export interface ApiCargoProps {
  id: string;
  nome: string;
  descricao: string;
  situacao: string;
  qtde_colaboradores?: number;
  colaboradores?: ColaboradorProps[];
}
