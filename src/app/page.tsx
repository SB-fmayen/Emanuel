import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Feather,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { placeholderImages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { HeroSection } from '@/components/hero-section';

export default function Home() {
  // Usar todas las imágenes disponibles para el carrusel del hero
  const allImages = [
    { id: 'img-1', description: 'Establecimiento del Instituto Emanuel', imageUrl: '/establecimiento.jpg', imageHint: 'school' },
    { id: 'img-2', description: 'Alumnos del Instituto Emanuel', imageUrl: '/alumnos.jpg', imageHint: 'students' },
    { id: 'img-3', description: 'Familia Emanuel', imageUrl: '/Familia Emanuel.jpg', imageHint: 'community' },
    { id: 'img-4', description: 'Graduados del Instituto Emanuel', imageUrl: '/Graduados.jpg', imageHint: 'graduates' },
    { id: 'img-5', description: 'Desarrollo Cultural', imageUrl: '/desarrollo cultural.jpg', imageHint: 'culture' },
    { id: 'img-6', description: 'Eslogan del Instituto Emanuel', imageUrl: '/Eslogan.jpg', imageHint: 'slogan' },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <HeroSection heroImages={allImages} />

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">
                Bienvenidos al Instituto Emanuel
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Somos una institución comprometida con el desarrollo integral de
                nuestros estudiantes, ofreciendo una educación de calidad en un
                ambiente de cooperación y respeto.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
             <AnimateOnScroll delay={0.1}>
                <Card className="text-center h-full transition-transform hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-headline pt-4">
                      Nuestra Historia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Descubre la trayectoria y los valores que nos han guiado.
                    </p>
                  </CardContent>
                </Card>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <Card className="text-center h-full transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline pt-4">
                    Comunidad Educativa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Un equipo de docentes y personal dedicado a la excelencia.</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <Card className="text-center h-full transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline pt-4">
                    Actividades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Fomentamos el talento a través del deporte, arte y más.</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4}>
              <Card className="text-center h-full transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <Feather className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline pt-4">
                    Niveles Educativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Programas académicos diseñados para cada etapa del
                    aprendizaje.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-24">
        <div className="container mx-auto px-4">
           <AnimateOnScroll>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font.headline font-bold">
                Últimas Noticias
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Mantente al día con los eventos y noticias de nuestra comunidad.
              </p>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <AnimateOnScroll key={post.slug} delay={index * 0.1}>
                <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-xl hover:-translate-y-1">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.imageHint}
                      />
                    </div>
                  </Link>
                  <CardContent className="pt-6 flex-grow">
                    <Badge variant="secondary" className="mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="font-headline text-xl">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </CardFooter>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-12">
            <AnimateOnScroll>
                <Button asChild variant="outline">
                  <Link href="/blog">Ver todas las noticias</Link>
                </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
