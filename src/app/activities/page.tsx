import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { placeholderImages, schoolInfo } from "@/lib/data";
import { Paintbrush, Atom, Cpu, Dumbbell, Library, Music } from "lucide-react";

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
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Actividades y Servicios
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Fomentamos un desarrollo integral a través de una rica oferta de actividades extracurriculares y servicios de apoyo.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">
            Nuestras Actividades
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {schoolInfo.activities.map((activity) => {
              const image = activityImages[activity as keyof typeof activityImages];
              return (
                <Card key={activity} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
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
              )
            })}
          </div>

          <h2 className="text-3xl font-headline font-bold text-center mt-24 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
             {schoolInfo.services.map((service) => (
                <Card key={service} className="text-center">
                    <CardHeader>
                        <CardTitle>{service}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Ofrecemos {service.toLowerCase()} para la comodidad y bienestar de nuestra comunidad educativa.</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
