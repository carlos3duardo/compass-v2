import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import { app } from '@/config';
import { getAccessToken } from '@/lib/apiToken';

async function handleRequest(req: NextRequest) {
  const accessToken = await getAccessToken();

  const url = new URL(app.apiUrl + req.nextUrl.pathname.replace('/api', ''));
  url.search = req.nextUrl.search;

  const axiosHeaders = {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
    'Content-Type': req.headers.get('Content-Type') || 'application/json',
  };

  const contentType = req.headers.get('Content-Type');

  const body = await (contentType === 'application/json'
    ? req.json()
    : req.formData());

  return await axios({
    url: url.toString(),
    method: req.method,
    data: body,
    headers: axiosHeaders,
  })
    .then((response) => {
      return NextResponse.json(response.data, { status: response.status });
    })
    .catch(function (error) {
      return NextResponse.json(error.response.data, { status: 500 });
    });
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
