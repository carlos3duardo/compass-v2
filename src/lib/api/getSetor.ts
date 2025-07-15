import axios from 'axios';
import { cache } from 'react';

import { ApiSetorProps } from '@/types';

import { getAccessToken } from '../apiToken';

interface Props {
  id: string;
  relationships?: string[];
}

export const getSetor = cache(async ({ id, relationships = [] }: Props) => {
  const accessToken = await getAccessToken();

  try {
    const response = axios.get(
      `${process.env.API_URL}/setor/${id}?with=${relationships.join(',')}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return (await response).data as ApiSetorProps;
  } catch (error) {
    console.error(error);
  }
});
