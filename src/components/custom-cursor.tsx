"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    // Verificar si el usuario prefiere reducir movimiento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !cursorRef.current || !cursorDotRef.current) {
      return;
    }

    // Ocultar el cursor por defecto
    document.body.style.cursor = 'none';

    // Variables de estado
    let isHovering = false;
    let isMagneticMode = false;
    let targetScaleX = 1;
    let targetScaleY = 1;

    // Actualizar posición del mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    // Animar el cursor
    const animateCursor = () => {
      // Interpolar posición del cursor (lag effect)
      cursorX.current += (mouseX.current - cursorX.current) * 0.15;
      cursorY.current += (mouseY.current - cursorY.current) * 0.15;

      if (cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: cursorX.current - 15,
          y: cursorY.current - 15,
          overwrite: 'auto',
        });
      }

      requestAnimationFrame(animateCursor);
    };

    // Detectar hover en elementos interactivos
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering = true;

      // Detectar si es un elemento magnético
      isMagneticMode = target.classList.contains('magnetic-cursor');

      // Aumentar tamaño del cursor
      gsap.to(cursorRef.current, {
        width: 40,
        height: 40,
        borderColor: 'rgba(59, 130, 246, 0.8)',
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
        duration: 0.3,
        ease: 'power2.out',
      });

      // Si es magnetic, acercar el cursor al centro del elemento
      if (isMagneticMode && target instanceof HTMLElement) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        gsap.to(
          { x: cursorX.current, y: cursorY.current },
          {
            x: centerX,
            y: centerY,
            duration: 0.4,
            ease: 'power2.out',
            onUpdate: function () {
              const obj = this.targets()[0] as any;
              cursorX.current = obj.x;
              cursorY.current = obj.y;
            },
          }
        );
      }
    };

    const handleMouseLeave = () => {
      isHovering = false;
      isMagneticMode = false;

      // Volver al tamaño normal
      gsap.to(cursorRef.current, {
        width: 30,
        height: 30,
        borderColor: 'rgba(59, 130, 246, 0.6)',
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Agregar event listeners a elementos interactivos
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input[type="button"], input[type="submit"], .cursor-hover, .magnetic-cursor'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Usar MutationObserver para detectar nuevos elementos dinámicos
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        'a, button, [role="button"], input[type="button"], input[type="submit"], .cursor-hover, .magnetic-cursor'
      );
      newElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter as EventListener);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Iniciar animación
    animateCursor();

    // Mostrar cursor cuando entra a la ventana
    const handleMouseEnterWindow = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });
      }
    };

    const handleMouseLeaveWindow = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { opacity: 0, duration: 0.3 });
      }
    };

    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-[30px] h-[30px] border-2 border-blue-500/60 rounded-full transition-all duration-300 ease-out opacity-0"
        style={{
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
        }}
      />
      {/* Dot interno opcional */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-2 h-2 bg-blue-500 rounded-full opacity-0"
      />
    </>
  );
}
