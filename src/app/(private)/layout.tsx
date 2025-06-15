import { AppLayout } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppLayout.Root>
      <AppLayout.Sidebar />
      <AppLayout.Main>{children}</AppLayout.Main>
    </AppLayout.Root>
  );
}
