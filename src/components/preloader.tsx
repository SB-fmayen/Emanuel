"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Logo } from './logo';

interface PreloaderProps {
  onFinish: () => void;
}

export function Preloader({ onFinish }: PreloaderProps) {
  const componentRef = useRef(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onFinish });
    
    // Animate panels sliding out
    tl.to(panelsRef.current, {
      yPercent: -100,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.inOut',
    }, "+=0.5");

    // Animate logo fading and scaling out
    tl.to(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: 'power2.inOut'
    }, "-=1.0");

    // Animate main content in (by targeting a class)
    tl.fromTo('.preloader-target', {
        y: 20,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1
    }, "-=0.5");

  }, [onFinish]);

  return (
    <div ref={componentRef} className="preloader-container fixed inset-0 z-[100]">
      <div ref={logoRef} className="absolute inset-0 flex items-center justify-center z-10">
        <Logo />
      </div>
      <div className="panels-container relative w-full h-full flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            ref={el => panelsRef.current[i] = el}
            className="panel w-[20vw] h-full bg-primary"
          />
        ))}
      </div>
    </div>
  );
}