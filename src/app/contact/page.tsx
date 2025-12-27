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
import { AnimateOnScroll } from "@/components/animate-on-scroll";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute top-40 -right-32 w-96 h-96 bg-gradient-to-br from-sky-200 to-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(14, 165, 233, 0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-slate-900 mb-4">
              Contacto
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-sky-500 to-transparent rounded-full" />
              <div className="w-3 h-3 bg-sky-600 rounded-full" />
              <div className="h-1 w-12 bg-gradient-to-l from-sky-500 to-transparent rounded-full" />
            </div>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de los siguientes medios.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimateOnScroll>
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
            </AnimateOnScroll>

            <div className="space-y-8">
              <AnimateOnScroll delay={0.1}>
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
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
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
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
