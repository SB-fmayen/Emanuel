"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((ref) => {
        if (!ref) return;
        const image = ref.querySelector('img');
        if (!image) return;

        gsap.to(image, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: componentRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <Carousel
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div ref={el => imageRefs.current[index] = el} className="relative h-full w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-10 z-10 hidden md:flex justify-center">
          <CarouselPrevious className="static translate-y-0 mx-2" />
          <CarouselNext className="static translate-y-0 mx-2" />
        </div>
      </Carousel>
      <div className="absolute z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
          Instituto Emanuel
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
          Forjando futuros brillantes con una educación de excelencia.
        </p>
        <Button asChild className="mt-8" size="lg" variant="default">
          <Link href="/about">
            Conoce Más <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
