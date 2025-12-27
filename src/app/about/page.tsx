import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import { schoolInfo, placeholderImages } from '@/lib/data';

export default function AboutPage() {
  const aboutImage = placeholderImages.find(p => p.id === 'about-us');

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Quiénes Somos
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Conoce la historia, filosofía y los valores que hacen del Instituto Emanuel un lugar único para aprender y crecer.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-headline font-bold text-primary">
                Nuestra Historia
              </h2>
              <p className="text-muted-foreground text-lg">
                Fundado con el espíritu de cooperación y el deseo de ofrecer educación de calidad a la comunidad de Amatitlán, el Instituto Básico por Cooperativa Emanuel ha sido un pilar en la formación de jóvenes desde su creación.
              </p>
              <p className="text-muted-foreground">
                A lo largo de los años, hemos crecido y evolucionado, ampliando nuestra oferta educativa para incluir el nivel diversificado y enriqueciendo nuestros programas con actividades que promueven el desarrollo integral de nuestros estudiantes. Nos enorgullece ser una institución que combina la excelencia académica con un fuerte sentido de comunidad y responsabilidad social.
              </p>
            </div>
            <div>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Target className="w-10 h-10 text-primary" />
                <CardTitle className="font-headline text-2xl">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Forjar futuros brillantes a través de una educación de excelencia, fomentando el desarrollo integral de los estudiantes en un ambiente de cooperación, respeto y participación comunitaria.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Eye className="w-10 h-10 text-primary" />
                <CardTitle className="font-headline text-2xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser una institución líder en educación por cooperativa, reconocida por su calidad académica, su compromiso con la innovación y la formación de ciudadanos responsables y proactivos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Heart className="w-10 h-10 text-primary" />
                <CardTitle className="font-headline text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Cooperación</li>
                  <li>Respeto</li>
                  <li>Responsabilidad</li>
                  <li>Excelencia</li>
                  <li>Integridad</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
