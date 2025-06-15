import { ReactNode } from 'react';

interface AppLayoutRootProps {
  children: ReactNode;
}

export function AppLayoutRoot({ children }: AppLayoutRootProps) {
  return <div className="flex min-h-dvh items-stretch">{children}</div>;
}
