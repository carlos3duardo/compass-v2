import axios from 'axios';
import { cache } from 'react';

import { ApiUnidadeProps } from '@/types';

import { getAccessToken } from '../apiToken';

interface Props {
  id: string;
  relationships?: string[];
}

export const getUnidade = cache(async ({ id, relationships = [] }: Props) => {
  const accessToken = await getAccessToken();

  try {
    const response = await axios.get(
      `${process.env.API_URL}/unidade/${id}?with=${relationships.join(',')}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        validateStatus: (status) => status < 500, // Aceita códigos 2xx, 3xx e 4xx
      },
    );

    if (response.status === 404) {
      return null;
    }

    return response.data as ApiUnidadeProps;
  } catch (error) {
    console.error(error);
    return null;
  }
});
