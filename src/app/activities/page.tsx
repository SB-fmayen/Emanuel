export const metadata = {
  title: 'Actividades y Servicios — Instituto Emanuel',
  description: 'Oferta extracurricular y servicios que fomentan el desarrollo integral.',
  openGraph: {
    title: 'Actividades y Servicios',
    description: 'Deportes, arte, tecnología y más en el Instituto Emanuel.',
    images: ['/desarrollo cultural.jpg'],
  },
};
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { placeholderImages, schoolInfo } from "@/lib/data";
import { Paintbrush, Atom, Cpu, Dumbbell, Library, Music } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const activityIcons = {
  Deportes: <Dumbbell className="w-8 h-8" />,
  "Arte y Cultura": <Paintbrush className="w-8 h-8" />,
  Tecnología: <Cpu className="w-8 h-8" />,
  "Laboratorio de Ciencias": <Atom className="w-8 h-8" />,
  Biblioteca: <Library className="w-8 h-8" />,
  Música: <Music className="w-8 h-8" />,
};

const activityImages = {
    Deportes: placeholderImages.find(p => p.id === 'activity-sports'),
    "Arte y Cultura": placeholderImages.find(p => p.id === 'activity-art'),
    Tecnología: placeholderImages.find(p => p.id === 'activity-tech'),
    "Laboratorio de Ciencias": placeholderImages.find(p => p.id === 'activity-science'),
    Biblioteca: placeholderImages.find(p => p.id === 'activity-library'),
    Música: placeholderImages.find(p => p.id === 'activity-music'),
}

export default function ActivitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-rose-200 to-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-fuchsia-200 to-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-activities" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(236, 72, 153, 0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-activities)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-slate-900 mb-4">
              Actividades y Servicios
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-pink-600 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-pink-500 to-transparent rounded-full" />
            </div>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Fomentamos un desarrollo integral a través de una rica oferta de actividades extracurriculares y servicios de apoyo.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-3xl font-headline font-bold text-center mb-12">
              Nuestras Actividades
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {schoolInfo.activities.map((activity, index) => {
              const image = activityImages[activity as keyof typeof activityImages];
              return (
                <AnimateOnScroll key={activity} delay={index * 0.1}>
                  <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 h-full">
                    {image && (
                      <div className="relative aspect-video">
                        <Image
                          src={image.imageUrl}
                          alt={activity}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                          {activityIcons[activity as keyof typeof activityIcons]}
                        </div>
                        <CardTitle className="font-headline text-2xl">{activity}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                          Espacios dedicados para el desarrollo de talento y habilidades en {activity.toLowerCase()}.
                      </p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              )
            })}
          </div>

          <AnimateOnScroll className="mt-24">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">
              Nuestros Servicios
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
             {schoolInfo.services.map((service, index) => (
                <AnimateOnScroll key={service} delay={index * 0.1}>
                  <Card className="text-center h-full">
                      <CardHeader>
                          <CardTitle>{service}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Ofrecemos {service.toLowerCase()} para la comodidad y bienestar de nuestra comunidad educativa.</p>
                      </CardContent>
                  </Card>
                </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
