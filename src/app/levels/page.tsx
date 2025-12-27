import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function LevelsPage() {
  const basicObjectives = [
    "Desarrollar habilidades de pensamiento crítico y resolución de problemas.",
    "Fomentar la lectura, escritura y comunicación efectiva.",
    "Introducir conceptos fundamentales en ciencias, matemáticas y estudios sociales.",
    "Promover valores cívicos y éticos.",
    "Estimular la creatividad a través del arte y la cultura.",
  ];

  const diversifiedObjectives = [
    "Profundizar en áreas de especialización académica y técnica.",
    "Preparar a los estudiantes para la educación superior y el mundo laboral.",
    "Fomentar la investigación, la innovación y el emprendimiento.",
    "Desarrollar habilidades de liderazgo y trabajo en equipo.",
    "Promover la participación ciudadana y el compromiso social.",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-levels" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(251, 146, 60, 0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-levels)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-slate-900 mb-4">
              Niveles Educativos
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-orange-600 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-orange-500 to-transparent rounded-full" />
            </div>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Ofrecemos una sólida formación académica en los niveles Básico y Diversificado, preparando a nuestros estudiantes para los desafíos del futuro.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimateOnScroll>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-headline hover:no-underline">
                  Nivel Básico (Jornada Vespertina)
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4 text-muted-foreground">
                  <p>
                    Nuestro ciclo de Educación Básica sienta las bases para el desarrollo académico y personal de los adolescentes. A lo largo de tres años, los estudiantes exploran una variedad de disciplinas que les permiten descubrir sus intereses y fortalecer sus competencias fundamentales.
                  </p>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Objetivos Principales:</h3>
                    <ul className="space-y-2">
                      {basicObjectives.map((obj, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl font-headline hover:no-underline">
                  Nivel Diversificado
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4 text-muted-foreground">
                  <p>
                    El ciclo Diversificado está diseñado para preparar a los jóvenes para sus futuros profesionales y académicos. Ofrecemos especializaciones que responden a las demandas del mundo actual, combinando una rigurosa formación teórica con experiencias prácticas.
                  </p>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Objetivos Principales:</h3>
                    <ul className="space-y-2">
                      {diversifiedObjectives.map((obj, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-semibold text-foreground">
                    (Consulte en la secretaría del instituto sobre las carreras disponibles para el próximo ciclo escolar).
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
