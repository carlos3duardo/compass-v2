import { ReactNode } from 'react';

import { AppLayout } from '.';

interface AppLayoutMainProps {
  children: ReactNode;
}

export function AppLayoutMain({ children }: AppLayoutMainProps) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-2 lg:ml-[240px] xl:ml-[260px] 2xl:ml-[300px]">
      {children}
      <AppLayout.Footer />
    </div>
  );
}
