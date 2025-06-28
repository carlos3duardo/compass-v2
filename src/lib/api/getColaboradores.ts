import axios from 'axios';
import { cache } from 'react';

import { ApiColaboradorListProps } from '@/types';

import { getAccessToken } from '../apiToken';

interface Props {
  cargoId?: string;
  all?: boolean;
  offset?: number;
  limit?: number;
}

export const getColaboradores = cache(
  async ({ cargoId, limit = 10, all = false }: Props) => {
    const accessToken = await getAccessToken();

    const colaboradores: ApiColaboradorListProps[] = [];
    let responseSize = 0;
    let loop = 0;

    if (all) {
      do {
        const params = new URLSearchParams({
          offset: (loop * limit).toString(),
          limit: limit.toString(),
          cargoId: cargoId || '',
        });

        await axios
          .get(`${process.env.API_URL}/colaborador?${params}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            loop++;

            responseSize = res.data.data.length;

            colaboradores.push(...res.data.data);
          });
      } while (responseSize === limit);

      return colaboradores as unknown as ApiColaboradorListProps[];
    }

    return [];
  },
);
