import Link from "next/link";

import { navItems, socialLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-foreground">Medical Academy</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            Anatomy and Embryology education for medical students, built around
            clear explanations and practical revision.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Pages</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground">Placeholders</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md border border-border px-3 py-2 text-sm text-muted hover:border-primary hover:text-primary"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  key={item.label}
                  className="rounded-md border border-border px-3 py-2 text-sm text-muted/70"
                  aria-disabled="true"
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-sm text-muted">
        Medical Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
