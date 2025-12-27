import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

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
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Niveles Educativos
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Ofrecemos una sólida formación académica en los niveles Básico y Diversificado, preparando a nuestros estudiantes para los desafíos del futuro.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
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
        </div>
      </section>
    </>
  )
}
