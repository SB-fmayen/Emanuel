'use client';

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { Preloader } from '@/components/preloader';
import { useEffect, useState } from 'react';

// Metadata is defined in a generateMetadata function in a server component
// export const metadata: Metadata = {
//   title: 'Emanuel Institute Hub',
//   description: 'Website for Instituto Básico por Cooperativa Emanuel',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn('min-h-screen bg-background font-body antialiased')}
      >
        {isLoading && isHome && (
          <Preloader onFinish={() => setIsLoading(false)} />
        )}
        {!isLoading || !isHome ? (
          <div className="relative flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-1">{children}</main>
            <AppFooter />
          </div>
        ) : null}
        <Toaster />
      </body>
    </html>
  );
}