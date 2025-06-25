import axios from 'axios';
import { cache } from 'react';

import { ApiCargoProps } from '@/types';

import { getAccessToken } from '../apiToken';

export const getCargo = cache(async (id: string) => {
  const accessToken = await getAccessToken();

  try {
    const response = axios.get(`${process.env.API_URL}/cargo/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return (await response).data as ApiCargoProps;
  } catch (error) {
    console.error(error);
  }
});
