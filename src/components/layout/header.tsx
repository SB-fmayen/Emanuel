"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import dynamic from "next/dynamic";

const MobileNav = dynamic(() => import("./mobile-nav").then(mod => mod.MobileNav), {
  ssr: false,
});


export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Quiénes Somos" },
  { href: "/levels", label: "Niveles" },
  { href: "/activities", label: "Actividades" },
  { href: "/blog", label: "Noticias" },
  { href: "/contact", label: "Contacto" },
  { href: "/virtual-tour", label: "Tour Virtual" },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
