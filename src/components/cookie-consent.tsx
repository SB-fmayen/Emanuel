"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ConsentStatus = 'accepted' | 'rejected' | null;

export function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== 'undefined') ? window.localStorage.getItem('cookieConsent') : null;
    const parsed = saved === 'accepted' ? 'accepted' : saved === 'rejected' ? 'rejected' : null;
    setStatus(parsed);
    setVisible(!parsed);
  }, []);

  function decide(newStatus: Exclude<ConsentStatus, null>) {
    try {
      window.localStorage.setItem('cookieConsent', newStatus);
      setStatus(newStatus);
      setVisible(false);
    } catch {
      setVisible(false);
    }
  }

  if (!visible) return null;

  return (
    <div className={cn(
      'fixed inset-x-0 bottom-0 z-50',
      'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      'border-t'
    )}>
      <div className="container px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Usamos cookies esenciales y de rendimiento para mejorar tu experiencia. Consulta nuestra{' '}
          <Link href="/cookies" className="underline hover:text-primary">Política de Cookies</Link>.
        </p>
        <div className="flex gap-2 md:gap-3">
          <Button variant="outline" onClick={() => decide('rejected')}>Rechazar</Button>
          <Button variant="accent" onClick={() => decide('accepted')}>Aceptar</Button>
        </div>
      </div>
    </div>
  );
}
