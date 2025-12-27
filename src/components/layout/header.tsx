"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";


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
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="preloader-target sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <div className="md:hidden">
            {mounted ? (
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                      <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Logo />
                      </Link>
                    </div>
                    <nav className="flex flex-col space-y-4 mt-6">
                      {navLinks.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === href ? "text-primary" : "text-foreground"
                          )}
                        >
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <div className="w-10 h-10" /> // Placeholder to prevent layout shift
            )}
          </div>
        </div>
      </div>
    </header>
  );
}