"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onFinish: () => void;
}

export function Preloader({ onFinish }: PreloaderProps) {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Verificar si el usuario prefiere reducir movimiento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (preloaderRef.current) {
        gsap.set(preloaderRef.current, { autoAlpha: 0 });
      }
      onFinish();
      return;
    }

    const tl = gsap.timeline({ onComplete: onFinish });

    // Líneas de entrada desde lados (0s - 0.6s)
    tl.fromTo(
      linesRef.current,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );

    // Logo aparece (0.2s - 0.7s)
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out',
      },
      0.2
    );

    // Texto aparece (0.4s - 0.8s)
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      0.4
    );

    // Barra de progreso llena (0.8s - 1.5s)
    tl.to(
      progressRef.current,
      {
        width: '100%',
        duration: 0.7,
        ease: 'power1.inOut',
      },
      0.8
    );

    // Espera 0.3s más
    tl.to({}, { duration: 0.3 });

    // Todo se desvanece hacia arriba (1.8s - 2.3s)
    tl.to(
      preloaderRef.current,
      {
        y: '-100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power4.in',
      },
      1.8
    );

  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="preloader-overlay fixed inset-0 z-[9999] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Líneas decorativas */}
      <div className="absolute top-0 w-full h-1 bg-blue-500 origin-left" ref={(el) => { if (el) linesRef.current[0] = el; }} />
      <div className="absolute top-12 w-full h-0.5 bg-indigo-400 origin-right" ref={(el) => { if (el) linesRef.current[1] = el; }} />
      <div className="absolute bottom-32 w-full h-1 bg-purple-500 origin-left" ref={(el) => { if (el) linesRef.current[2] = el; }} />

      {/* Logo */}
      <div ref={logoRef} className="mb-12">
        <img
          src="/logo.png"
          alt="Instituto Emanuel"
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Texto */}
      <div ref={textRef} className="text-center">
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-slate-900 mb-2 tracking-tighter leading-none">
          Instituto
        </h1>
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 tracking-tighter leading-none">
          Emanuel
        </h1>
        <p className="text-xs md:text-sm text-slate-600 tracking-widest uppercase font-medium letter-spacing">
          Educación de Excelencia
        </p>
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-16 w-64 h-1 bg-slate-200 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full w-0"
        />
      </div>
    </div>
  );
}
