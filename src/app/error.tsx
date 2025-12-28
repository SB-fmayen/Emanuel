"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Algo salió mal</h1>
      <p className="text-muted-foreground mb-8">{error.message || 'Se produjo un error inesperado.'}</p>
      <button className="text-primary underline" onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}
