import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { ApiColaboradorProps } from '@/types';

export function useColaboradorList() {
  const limit = 50;

  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ['queryColaboradorList'],
    queryFn: async (): Promise<ApiColaboradorProps[]> => {
      let data: ApiColaboradorProps[] = [];
      let responseSize = 0;
      let loop = 0;

      do {
        const response = await axios.get('/api/colaborador', {
          params: {
            offset: limit * loop,
            limit,
          },
        });

        loop += 1;

        responseSize = response.data.data.length;

        data = data.concat(
          response.data.data.map((row: ApiColaboradorProps) => {
            return row;
          }),
        );
      } while (responseSize === limit);

      return data;
    },
  });

  return { isLoading, isSuccess, isError, data, error };
}
