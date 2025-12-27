import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { schoolInfo, placeholderImages } from "@/lib/data";

export default function ContactPage() {
  const mapImage = placeholderImages.find(p => p.id === 'contact-map');

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">
            Contacto
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de los siguientes medios.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Tu Nombre" />
                  <Input type="email" placeholder="Tu Correo Electrónico" />
                  <Input placeholder="Asunto" />
                  <Textarea placeholder="Tu Mensaje" rows={5} />
                  <Button type="submit" className="w-full" variant="accent">Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Dirección</h3>
                      <p className="text-muted-foreground">{schoolInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Teléfono</h3>
                      <p className="text-muted-foreground">{schoolInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Correo Electrónico</h3>
                      <p className="text-muted-foreground">info@emanuel.edu.gt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Nuestra Ubicación</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {mapImage && (
                     <div className="aspect-video relative">
                      <Image
                        src={mapImage.imageUrl}
                        alt={mapImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={mapImage.imageHint}
                      />
                     </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
