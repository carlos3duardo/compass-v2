import { ReactNode } from 'react';

export function AlertList({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 text-sm text-slate-700">
      <ul role="list" className="list-disc pl-5">
        {children}
      </ul>
    </div>
  );
}
