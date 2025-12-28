import { schoolInfo } from '@/lib/data';

export const metadata = {
  title: 'Política de Privacidad — Instituto Emanuel',
  description: 'Conoce cómo protegemos y tratamos tus datos personales.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-headline font-bold mb-6">Política de Privacidad</h1>
      <p className="text-muted-foreground mb-8">Última actualización: 28 de diciembre de 2025</p>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Introducción</h2>
        <p className="text-muted-foreground">En {schoolInfo.name} valoramos tu privacidad. Esta política explica qué datos recopilamos, cómo los utilizamos y tus derechos.</p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Datos que recopilamos</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Datos de contacto (nombre, correo, teléfono) cuando usas el formulario de contacto.</li>
          <li>Información técnica básica (páginas visitadas, tiempos de carga) para mejorar el sitio.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Cómo usamos tus datos</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Responder consultas enviadas a través del sitio.</li>
          <li>Mejorar el contenido y la experiencia del usuario.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Base legal</h2>
        <p className="text-muted-foreground">Tratamos tus datos con tu consentimiento y para intereses legítimos relacionados con la operación del sitio.</p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Compartición y almacenamiento</h2>
        <p className="text-muted-foreground">No vendemos tus datos. Solo los compartimos cuando es necesario para prestar el servicio o por obligaciones legales. Aplicamos medidas razonables de seguridad.</p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Tus derechos</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Acceder, rectificar o eliminar tus datos.</li>
          <li>Retirar tu consentimiento cuando corresponda.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-headline font-semibold">Contacto</h2>
        <p className="text-muted-foreground">Para ejercer tus derechos, contáctanos en {schoolInfo.phone} o visita nuestra página de contacto.</p>
      </section>
    </div>
  );
}
