"use client";

import { useRef, useEffect, ReactNode, HTMLAttributes } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  start?: string; // e.g., "top 80%"
  className?: string;
  as?: React.ElementType;
}

export function AnimateOnScroll({
  children,
  delay = 0,
  start = 'top 85%',
  className,
  as: Component = 'div',
  ...props
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial state
    gsap.set(el, { opacity: 0, y: 24 });

    // Create animation with ScrollTrigger
    const anim = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: start,
        toggleActions: 'play none none none',
        // markers: process.env.NODE_ENV === "development", // Uncomment for debugging
      },
      paused: true, // Animation starts paused and is controlled by ScrollTrigger
    });

    return () => {
      // Cleanup ScrollTrigger instance on component unmount
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
      anim.kill();
    };
  }, [delay, start]);

  return (
    <Component ref={ref} className={cn('will-change-transform', className)} {...props}>
      {children}
    </Component>
  );
}
