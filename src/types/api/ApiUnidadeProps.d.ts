type ResponsavelProps = {
  id: string;
  nome: string;
};

export type ApiUnidadeRowProps = {
  id: string;
  nome: string;
  codigo: string;
  cnpj: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  municipio: string;
  uf: string;
  ativo: boolean;
  responsavel: ResponsavelProps | null;
};

export type ApiUnidadeProps = ApiUnidadeRowProps & {};
