import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ApiColaboradorSituacaoProps } from '@/types';

interface HookProps {
  onlyInUse?: boolean;
}

export function useColaboradorSituacao({ onlyInUse = false }: HookProps) {
  const limit = 50;

  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ['queryColaboradorSituacao', onlyInUse],
    queryFn: async (): Promise<ApiColaboradorSituacaoProps[]> => {
      let situaocoes: ApiColaboradorSituacaoProps[] = [];
      let responseSize = 0;
      let loop = 0;

      do {
        const response = await axios.get('/api/colaborador-situacao', {
          params: {
            offset: limit * loop,
            limit,
            onlyInUse,
          },
        });

        loop += 1;

        responseSize = response.data.data.length;

        situaocoes = situaocoes.concat(
          response.data.data.map((row: ApiColaboradorSituacaoProps) => {
            return row;
          }),
        );
      } while (responseSize === limit);

      return situaocoes;
    },
  });

  return { isLoading, isSuccess, isError, data, error };
}
