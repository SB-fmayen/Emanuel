import Link from "next/link";
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Logo } from "@/components/logo";
import { schoolInfo } from "@/lib/data";

export function AppFooter() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Forjando futuros brillantes con una educación de excelencia y valores.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold">Navegación</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">Quiénes Somos</Link></li>
              <li><Link href="/levels" className="text-muted-foreground hover:text-primary">Niveles Educativos</Link></li>
              <li><Link href="/activities" className="text-muted-foreground hover:text-primary">Actividades</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Noticias</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacidad</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-lg font-semibold">Contacto</h4>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>{schoolInfo.address}</p>
              <p>Tel: {schoolInfo.phone}</p>
              <div className="flex space-x-4 pt-2">
                <Link href="#" aria-label="Facebook del Instituto Emanuel" className="hover:text-primary"><Facebook /></Link>
                <Link href="#" aria-label="Twitter del Instituto Emanuel" className="hover:text-primary"><Twitter /></Link>
                <Link href="#" aria-label="Instagram del Instituto Emanuel" className="hover:text-primary"><Instagram /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {schoolInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
