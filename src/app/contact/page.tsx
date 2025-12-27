"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { schoolInfo, placeholderImages } from "@/lib/data";
import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const mapImage = placeholderImages.find(p => p.id === 'contact-map');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };


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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <Input name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} required />
                  <Input name="email" type="email" placeholder="Tu Correo Electrónico" value={formData.email} onChange={handleChange} required />
                  <Input name="subject" placeholder="Asunto" value={formData.subject} onChange={handleChange} required />
                  <Textarea name="message" placeholder="Tu Mensaje" rows={5} value={formData.message} onChange={handleChange} required />
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
