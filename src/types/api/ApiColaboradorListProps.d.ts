type UsuarioProps = {
  id: string;
  nome: string;
  nome_completo: string;
  email: string;
  avatar_url: string | null;
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
};

type SituacaoProps = {
  id: string;
  nome: string;
  cor: string;
  ativo: boolean;
  pode_acessar: boolean;
};

export interface ApiColaboradorListProps {
  id: string;
  usuario: UsuarioProps;
  data_admissao: string;
  cargo: CargoProps | null;
  setor: SetorProps | null;
  unidade: UnidadeProps | null;
  equipes: EquipeProps[];
  situacao: SituacaoProps;
}
