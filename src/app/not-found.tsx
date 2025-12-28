import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Página no encontrada</h1>
      <p className="text-muted-foreground mb-8">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="text-primary underline">Volver al inicio</Link>
    </div>
  );
}
