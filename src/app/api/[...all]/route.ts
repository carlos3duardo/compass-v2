import { NextRequest, NextResponse } from 'next/server';

import { app } from '@/config';
import { getAccessToken } from '@/lib/apiToken';

async function handleRequest(req: NextRequest) {
  const accessToken = await getAccessToken();

  const url = new URL(app.apiUrl + req.nextUrl.pathname.replace('/api', ''));
  url.search = req.nextUrl.search;

  const headers = new Headers();
  headers.set('Authorization', `Bearer ${accessToken}`);
  headers.set(
    'Content-Type',
    req.headers.get('Content-Type') || 'application/json',
  );

  const response = await fetch(url.toString(), {
    method: req.method,
    headers,
    body: req.method !== 'GET' ? await req.text() : undefined,
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export async function GET(req: NextRequest) {
  return handleRequest(req);
}

export async function POST(req: NextRequest) {
  return handleRequest(req);
}

export async function PUT(req: NextRequest) {
  return handleRequest(req);
}

export async function PATCH(req: NextRequest) {
  return handleRequest(req);
}

export async function DELETE(req: NextRequest) {
  return handleRequest(req);
}
