import './globals.css';

import type { Metadata } from 'next';
import { Geist, Inter, JetBrains_Mono } from 'next/font/google';

import AppProviders from './providers';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.APP_NAME}`,
    default: process.env.APP_NAME || 'Bússola da Gestão',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-color-theme="cosmic-blue" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
