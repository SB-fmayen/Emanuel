"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

type HeroImage = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

interface HeroSectionProps {
  heroImages: HeroImage[];
}

export function HeroSection({ heroImages }: HeroSectionProps) {
  const componentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const firstImage = heroImages?.[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      // Animación del subtítulo
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );

      // Animación del botón
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      className="preloader-target relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con diseño artístico */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de fondo (opcional) */}
        {firstImage && (
          <Image
            src={firstImage.imageUrl}
            alt={firstImage.description}
            fill
            className="object-cover opacity-25"
            data-ai-hint={firstImage.imageHint}
            priority
          />
        )}
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        
        {/* Círculos decorativos grandes */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />

        {/* Líneas decorativas sutiles */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Bloques de color flotantes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-3xl opacity-10 mix-blend-multiply blur-2xl transform -rotate-45" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-400 rounded-3xl opacity-10 mix-blend-multiply blur-2xl transform rotate-45" />
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-purple-400 rounded-3xl opacity-10 mix-blend-multiply blur-2xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        <div ref={titleRef}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-headline font-extrabold text-slate-900 mb-4 leading-tight">
            Instituto
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-headline font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
            Emanuel
          </h1>
        </div>

        {/* Divisor decorativo */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          <div className="w-3 h-3 bg-blue-600 rounded-full" />
          <div className="h-1 w-12 bg-gradient-to-l from-blue-500 to-transparent rounded-full" />
        </div>

        <div ref={subtitleRef}>
          <p className="text-lg md:text-2xl text-slate-700 mb-4 font-light">
            Forjando futuros brillantes
          </p>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Somos una institución comprometida con el desarrollo integral de nuestros estudiantes, 
            ofreciendo una educación de calidad en un ambiente de cooperación, respeto y excelencia académica.
          </p>
        </div>

        <div ref={buttonRef}>
          <Button asChild className="px-12 py-7 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" size="lg">
            <Link href="/about" className="inline-flex items-center gap-2">
              Conoce Más 
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
