import { CookiesPageClient } from './cookies-client';

export const metadata = {
  title: 'Política de Cookies — Instituto Emanuel',
  description: 'Información sobre el uso de cookies en nuestro sitio web.',
};

export default function CookiesPage() {

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-headline font-bold mb-6">Política de Cookies</h1>
      <p className="text-muted-foreground mb-8">Última actualización: 28 de diciembre de 2025</p>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">¿Qué son las cookies?</h2>
        <p className="text-muted-foreground">Las cookies son pequeños archivos que se almacenan en tu dispositivo para recordar preferencias y mejorar tu experiencia.</p>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Tipos de cookies que usamos</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Cookies esenciales: necesarias para el funcionamiento del sitio.</li>
          <li>Cookies de rendimiento: nos ayudan a entender y mejorar la experiencia.</li>
        </ul>
      </section>

      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-headline font-semibold">Gestión de cookies</h2>
        <p className="text-muted-foreground">Puedes controlar y eliminar cookies desde la configuración de tu navegador. Ten en cuenta que desactivarlas puede afectar el funcionamiento del sitio.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-headline font-semibold">Consentimiento</h2>
        <p className="text-muted-foreground">Al continuar usando el sitio, aceptas el uso de cookies según esta política.</p>
        <CookiesPageClient />
      </section>
    </div>
  );
}
