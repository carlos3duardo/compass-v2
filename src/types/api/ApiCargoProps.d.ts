type ColaboradorProps = {
  id: string;
  nome: string;
  avatarUrl: string | null;
};

export interface ApiCargoProps {
  id: string;
  nome: string;
  descricao: string;
  situacao: string;
  qtde_colaboradores?: number;
  colaboradores?: ColaboradorProps[];
}
