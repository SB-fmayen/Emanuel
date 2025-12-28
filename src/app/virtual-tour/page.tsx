import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { VirtualTourClient } from "./virtual-tour-client";

export const metadata = {
  title: 'Tour Virtual — Instituto Emanuel',
  description: 'Genera un guion narrado para un tour virtual del instituto con IA.',
  openGraph: {
    title: 'Tour Virtual',
    description: 'Herramienta de IA para marketing y promoción del Instituto Emanuel.',
    images: ['/establecimiento.jpg'],
  },
};

export default function VirtualTourPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-lime-200 to-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-green-200 to-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-200 to-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-tour" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(34, 197, 94, 0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-tour)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-slate-900 mb-4">
              Generador de Tour Virtual
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-green-600 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-green-500 to-transparent rounded-full" />
            </div>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Crea un guion narrado para un tour virtual de nuestro instituto utilizando inteligencia artificial. Una herramienta innovadora para marketing y promoción.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimateOnScroll>
            <VirtualTourClient />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
