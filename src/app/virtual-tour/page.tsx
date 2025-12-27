import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { VirtualTourClient } from "./virtual-tour-client";

export default function VirtualTourPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">
              Generador de Tour Virtual
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Crea un guion narrado para un tour virtual de nuestro instituto utilizando inteligencia artificial. Una herramienta innovadora para marketing y promoción.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimateOnScroll>
            <VirtualTourClient />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
