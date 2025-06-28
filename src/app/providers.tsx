'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from '@/providers';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <ToastContainer icon={false} />
    </ThemeProvider>
  );
}
