type UsuarioProps = {
  id: string;
  nome: string;
  nome_completo: string;
  email: string;
  cpf?: string | null;
  nascimento?: string | null;
  avatar_url: string | null;
  ultima_atividade?: string | null;
};

type CargoProps = {
  id: string;
  nome: string;
};

type SetorProps = {
  id: string;
  nome: string;
};

type UnidadeProps = {
  id: string;
  nome: string;
};

type EquipeProps = {
  id: string;
  nome: string;
  level?: number;
  path?: string;
};

type SituacaoProps = {
  id: string;
  nome: string;
  cor: string;
  ativo: boolean;
  pode_acessar: boolean;
};

export interface ApiColaboradorProps {
  id: string;
  eh_subordinado?: boolean;
  usuario: UsuarioProps;
  data_admissao: string;
  cargo: CargoProps | null;
  setor: SetorProps | null;
  unidade: UnidadeProps | null;
  equipes: EquipeProps[];
  situacao: SituacaoProps;
}
