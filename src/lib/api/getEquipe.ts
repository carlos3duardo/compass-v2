import axios from 'axios';
import { cache } from 'react';

import { ApiEquipeProps } from '@/types';

import { getAccessToken } from '../apiToken';

interface Props {
  id: string;
  relationships?: string[];
}

export const getEquipe = cache(async ({ id, relationships = [] }: Props) => {
  const accessToken = await getAccessToken();

  try {
    const response = axios.get(
      `${process.env.API_URL}/equipe/${id}?with=${relationships.join(',')}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return (await response).data as ApiEquipeProps;
  } catch (error) {
    console.error(error);
  }
});
