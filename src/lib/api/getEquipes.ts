import axios from 'axios';
import { cache } from 'react';

import { ApiEquipeRowProps } from '@/types';

import { getAccessToken } from '../apiToken';

export const getEquipes = cache(async () => {
  const accessToken = await getAccessToken();

  const equipes: ApiEquipeRowProps[] = [];
  let responseSize = 0;
  let loop = 0;
  const limit = 50;

  do {
    const params = new URLSearchParams({
      offset: (loop * limit).toString(),
      limit: limit.toString(),
      orderby: 'nome.asc',
    });

    await axios
      .get(`${process.env.API_URL}/equipe?${params}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        loop++;

        responseSize = res.data.data.length;

        equipes.push(...res.data.data);
      });
  } while (responseSize === limit);

  return equipes as unknown as ApiEquipeRowProps[];
});
