import axios from 'axios';
import { cache } from 'react';

import { ApiColaboradorProps } from '@/types';

import { getAccessToken } from '../apiToken';

export const getColaborador = cache(async (id: string) => {
  const accessToken = await getAccessToken();

  try {
    const response = axios.get(`${process.env.API_URL}/colaborador/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return (await response).data as ApiColaboradorProps;
  } catch (error) {
    console.error(error);
  }
});
