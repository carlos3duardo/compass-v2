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
    const response = axios.get(
      `${process.env.API_URL}/unidade/${id}?with=${relationships.join(',')}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return (await response).data as ApiUnidadeProps;
  } catch (error) {
    console.error(error);
  }
});
