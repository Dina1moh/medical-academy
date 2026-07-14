import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navItems, whatsappHref } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-placeholder.svg"
            alt="Medical Academy logo placeholder"
            width={44}
            height={44}
            priority
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-foreground">Medical Academy</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </Button>
          <Button asChild size="icon" className="sm:hidden" aria-label="WhatsApp">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
      <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm font-medium text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
