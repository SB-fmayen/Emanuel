import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { placeholderImages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export default function AboutPage() {
  const aboutImage = placeholderImages.find(p => p.id === 'about-us');
  const philosophyImage = placeholderImages.find(p => p.id === 'hero-3');

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-6xl font-headline font-bold">
              Quiénes Somos
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Conoce la historia, filosofía y los valores que hacen del Instituto Emanuel un lugar único para aprender y crecer.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-300"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                  Nuestra Historia
                </h2>
                <p className="text-muted-foreground text-lg">
                  Fundado con el espíritu de cooperación y el deseo de ofrecer educación de calidad a la comunidad de Amatitlán, el Instituto Básico por Cooperativa Emanuel ha sido un pilar en la formación de jóvenes desde su creación.
                </p>
                <p className="text-muted-foreground">
                  A lo largo de los años, hemos crecido y evolucionado, ampliando nuestra oferta educativa para incluir el nivel diversificado y enriqueciendo nuestros programas con actividades que promueven el desarrollo integral de nuestros estudiantes. Nos enorgullece ser una institución que combina la excelencia académica con un fuerte sentido de comunidad y responsabilidad social.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-12">
                  Nuestra Filosofía
              </h2>
            </AnimateOnScroll>
            <div className="grid lg:grid-cols-3 gap-8">
                <AnimateOnScroll delay={0.1}>
                  <Card className="border-0 shadow-none text-center">
                      <CardHeader className="flex flex-row items-center justify-center gap-4">
                          <Target className="w-10 h-10 text-primary" />
                          <CardTitle className="font-headline text-2xl">Misión</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">
                          Forjar futuros brillantes a través de una educación de excelencia, fomentando el desarrollo integral de los estudiantes en un ambiente de cooperación, respeto y participación comunitaria.
                          </p>
                      </CardContent>
                  </Card>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                  <Card className="border-0 shadow-none text-center">
                      <CardHeader className="flex flex-row items-center justify-center gap-4">
                          <Eye className="w-10 h-10 text-primary" />
                          <CardTitle className="font-headline text-2xl">Visión</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">
                          Ser una institución líder en educación por cooperativa, reconocida por su calidad académica, su compromiso con la innovación y la formación de ciudadanos responsables y proactivos.
                          </p>
                      </CardContent>
                  </Card>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.3}>
                  <Card className="border-0 shadow-none text-center">
                      <CardHeader className="flex flex-row items-center justify-center gap-4">
                          <Heart className="w-10 h-10 text-primary" />
                          <CardTitle className="font-headline text-2xl">Valores</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="list-none text-muted-foreground space-y-1">
                          <li>Cooperación</li>
                          <li>Respeto</li>
                          <li>Responsabilidad</li>
                          <li>Excelencia</li>
                          <li>Integridad</li>
                          </ul>
                      </CardContent>
                  </Card>
                </AnimateOnScroll>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                  Un Pilar en la Comunidad
                </h2>
                <p className="text-muted-foreground text-lg">
                  Más que una institución educativa, somos una comunidad que cree en el poder de la colaboración y el apoyo mutuo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                          <h4 className="font-semibold">Educación por Cooperativa</h4>
                          <p className="text-muted-foreground text-sm">Nuestro modelo único involucra a padres, maestros y estudiantes en la toma de decisiones.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                          <h4 className="font-semibold">Desarrollo Integral</h4>
                          <p className="text-muted-foreground text-sm">Fomentamos no solo el crecimiento académico, sino también el artístico, deportivo y personal.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                          <h4 className="font-semibold">Compromiso Social</h4>
                          <p className="text-muted-foreground text-sm">Inculcamos en nuestros estudiantes la importancia de ser ciudadanos activos y responsables.</p>
                      </div>
                  </div>
                </div>
              </div>
              <div>
                {philosophyImage && (
                  <Image
                    src={philosophyImage.imageUrl}
                    alt={philosophyImage.description}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-300"
                    data-ai-hint={philosophyImage.imageHint}
                  />
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              ¿Listo para unirte a nuestra familia?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre todo lo que el Instituto Emanuel tiene para ofrecer. Ponte en contacto con nosotros para más información.
            </p>
            <Button asChild className="mt-8" size="lg" variant="accent">
              <Link href="/contact">
                Contáctanos
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
