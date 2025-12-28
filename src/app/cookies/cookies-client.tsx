"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function CookiesPageClient() {
  const [status, setStatus] = useState<'accepted' | 'rejected' | null>(null);

  useEffect(() => {
    const saved = (typeof window !== 'undefined') ? window.localStorage.getItem('cookieConsent') : null;
    setStatus(saved === 'accepted' ? 'accepted' : saved === 'rejected' ? 'rejected' : null);
  }, []);

  function update(newStatus: 'accepted' | 'rejected') {
    window.localStorage.setItem('cookieConsent', newStatus);
    setStatus(newStatus);
  }

  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Estado actual: {status ?? 'sin establecer'}</span>
      <Button variant="outline" onClick={() => update('rejected')}>Rechazar</Button>
      <Button variant="accent" onClick={() => update('accepted')}>Aceptar</Button>
    </div>
  );
}
