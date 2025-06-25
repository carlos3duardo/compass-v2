import { add } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

import { httpResponse } from '@/data';
import { createUserSessionId, deleteUserSessionId } from '@/lib/apiToken';

export async function POST(request: NextRequest) {
  const json = await request.json();

  const { username, password, remember } = json;

  const { sessionId, expiresIn, usuario } = await createUserSessionId({
    username,
    password,
  });

  const nextResponse = NextResponse.json(
    { message: 'Cliente autenticado com sucesso' },
    { status: httpResponse.OK },
  );

  nextResponse.cookies.set({
    name: '__bg_sessionId',
    value: sessionId,
    secure: true,
    httpOnly: false,
    sameSite: 'strict',
    expires: remember ? add(new Date(), { seconds: expiresIn }) : undefined,
    path: '/',
  });

  nextResponse.cookies.set({
    name: '__bg_userinfo',
    value: JSON.stringify(usuario),
    secure: true,
    httpOnly: false,
    sameSite: 'strict',
    expires: remember ? add(new Date(), { seconds: expiresIn }) : undefined,
    path: '/',
  });

  return nextResponse;
}

export async function DELETE() {
  await deleteUserSessionId();

  const nextResponse = NextResponse.json(
    { message: 'Usuário desconectado com sucesso.' },
    { status: httpResponse.OK },
  );

  nextResponse.cookies.delete('__bg_sessionId');
  nextResponse.cookies.delete('__bg_userinfo');

  return nextResponse;
}
