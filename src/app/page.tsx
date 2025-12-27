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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { placeholderImages } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';

export default function Home() {
  const heroImages = placeholderImages.filter(p => p.id.startsWith('hero-'));

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-full w-full">
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

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
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
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl">
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
            <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl">
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
            <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl">
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
            <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl">
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
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Últimas Noticias
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mantente al día con los eventos y noticias de nuestra comunidad.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map(post => (
              <Card key={post.slug} className="overflow-hidden flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                </CardHeader>
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
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">Ver todas las noticias</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
