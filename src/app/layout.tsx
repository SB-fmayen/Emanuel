'use client';

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { AppHeader } from '@/components/layout/header';
import { AppFooter } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { CustomCursor } from '@/components/custom-cursor';
import { usePathname } from 'next/navigation';
import { Preloader } from '@/components/preloader';
import { useEffect, useState } from 'react';
import { Montserrat, PT_Sans } from 'next/font/google';
import { CookieConsent } from '@/components/cookie-consent';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-headline',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400','700'],
  style: ['normal','italic'],
  variable: '--font-body',
});

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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={cn('min-h-screen bg-background font-body antialiased', montserrat.variable, ptSans.variable)}
      >
        <CustomCursor />
        {isLoading && isHome && (
          <Preloader onFinish={() => setIsLoading(false)} />
        )}
        {!isLoading || !isHome ? (
          <div className="relative flex min-h-screen flex-col">
            <AppHeader />
            <main className="flex-1">{children}</main>
            <AppFooter />
            <CookieConsent />
          </div>
        ) : null}
        <Toaster />
      </body>
    </html>
  );
}