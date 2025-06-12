import { ReactNode } from 'react';

interface FormFooterSectionProps {
  children: ReactNode;
}

export function FormFooterSection({ children }: FormFooterSectionProps) {
  return <div className="flex flex-1 items-center gap-4">{children}</div>;
}
