type ResponsavelProps = {
  id: string;
  nome: string;
};

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

export interface ApiSetorRowProps {
  id: string;
  nome: string;
  ativo: boolean;
  responsavel: ResponsavelProps | null;
}

export interface ApiSetorProps {
  id: string;
  nome: string;
  ativo: boolean;
  responsavel: ResponsavelProps | null;
  colaboradores?: ColaboradorProps[];
}
