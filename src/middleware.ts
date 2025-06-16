import { NextRequest, NextResponse } from 'next/server';

const publicRoutes = [
  {
    path: '/senha/esqueci',
    whenAuthenticated: 'next',
  },
  {
    path: '/senha/redefinir',
    whenAuthenticated: 'next',
  },
  {
    path: '/login',
    whenAuthenticated: 'redirect',
  },
] as const;

const SIGNIN_ROUTE = '/login';
const DASHBOARD_ROUTE = '/';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicRoute = publicRoutes.find((route) => {
    const routeRegex = new RegExp(
      '^' + route.path.replace(/:[^/]+/g, '[^/]+') + '$',
    );
    return routeRegex.test(path);
  });

  const sessionId = request.cookies.get('__bg_sessionId')?.value;

  // se usuário não está autenticado e está tentando acessar uma rota pública
  // => continue normalmente
  if (!sessionId && publicRoute) {
    return NextResponse.next();
  }

  // se usuário não está autenticado e está tentando acessar uma rota privada
  // => redireciona para a página de login
  if (!sessionId && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();

    if (redirectUrl.pathname !== '/') {
      const redirectAfterLogin = redirectUrl.pathname + redirectUrl.search;

      redirectUrl.search = new URLSearchParams({
        redirectTo: redirectAfterLogin,
      }).toString();
    }

    redirectUrl.pathname = SIGNIN_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  // se o usuário está autenticado e está acessando uma rota pública
  // e a rota pública está configurada para redirecionar quando autenticado
  // => redireciona para a página inicial
  if (
    sessionId &&
    publicRoute &&
    publicRoute.whenAuthenticated === 'redirect'
  ) {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = DASHBOARD_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
