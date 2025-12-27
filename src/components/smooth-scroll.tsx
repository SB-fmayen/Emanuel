"use client";

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Solo inicializa en el cliente
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sincronizar GSAP ScrollTrigger con Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Función de limpieza para destruir la instancia de Lenis al desmontar el componente
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
