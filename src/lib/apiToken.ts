/* eslint-disable indent */
import axios from 'axios';
import crypto from 'crypto';
import { cookies } from 'next/headers';

import { app } from '@/config';

import redis from './redis';

type UserCredentials = {
  username: string;
  password: string;
};

type UserCredentialsResponseProps = {
  sessionId: string;
  accessToken: string;
  expiresIn: number;
  usuario: {
    id: string;
    nome: string;
    nome_completo: string;
    email: string;
    avatarUrl: string | null;
    empresa: {
      id: string;
      nome: string;
      logotipoUrl: string | null;
      colaboradorId: string;
    } | null;
  };
};

export async function createUserSessionId({
  username,
  password,
}: UserCredentials): Promise<UserCredentialsResponseProps> {
  const response = await axios({
    method: 'post',
    url: `${app.apiUrl}/oauth/token`,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Compass Authorization',
    },
    data: {
      grant_type: 'password',
      client_id: app.clientId,
      client_secret: app.clientSecret,
      username,
      password,
    },
  });

  const {
    access_token: accessToken,
    expires_in: expiresIn,
    usuario,
  } = await response.data;

  const sessionId = crypto.randomBytes(32).toString('hex');

  await redis.set(sessionId, accessToken, 'EX', expiresIn);

  const usuarioInfo = {
    id: usuario.id,
    nome: usuario.nome,
    nome_completo: usuario.nome_completo,
    email: usuario.email,
    avatarUrl: usuario.avatar_url || null,
    empresa: usuario.empresa
      ? {
          id: usuario.empresa.id,
          nome: usuario.empresa.nome,
          logotipoUrl: usuario.empresa.logotipo_url || null,
          colaboradorId: usuario.empresa.colaborador_id,
        }
      : null,
  };

  return { sessionId, accessToken, expiresIn, usuario: usuarioInfo };
}

export async function deleteUserSessionId() {
  const cookieStore = await cookies();

  const sessionId = cookieStore.has('__bg_sessionId')
    ? cookieStore.get('__bg_sessionId')!.value
    : null;

  if (sessionId === null) return;

  await redis.del(sessionId);
}

export async function getAccessToken() {
  const cookieStore = await cookies();

  const sessionId = cookieStore.has('__bg_sessionId')
    ? cookieStore.get('__bg_sessionId')!.value
    : null;

  if (!sessionId) return null;

  return await redis.get(sessionId, (err, value) => {
    if (err) return null;

    return value;
  });
}
