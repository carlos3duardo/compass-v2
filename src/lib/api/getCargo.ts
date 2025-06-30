import axios from 'axios';
import { cache } from 'react';

import { ApiCargoProps } from '@/types';

import { getAccessToken } from '../apiToken';

interface Props {
  id: string;
  relationships?: string[];
}

export const getCargo = cache(async ({ id, relationships = [] }: Props) => {
  const accessToken = await getAccessToken();

  try {
    const response = axios.get(
      `${process.env.API_URL}/cargo/${id}?with=${relationships.join(',')}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return (await response).data as ApiCargoProps;
  } catch (error) {
    console.error(error);
  }
});
