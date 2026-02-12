"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/vision", label: "Vision" },
  { href: "/selah", label: "Selah" },
  { href: "/bloom", label: "Bloom" },
  { href: "/les-pasteurs", label: "Les pasteurs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="New Home Church Paris"
            width={38}
            height={38}
            priority
          />
          <div className="leading-tight">
            <div className="font-title text-lg font-bold">NewHome</div>
            <div className="text-xs uppercase tracking-widest text-black/60">
              Paris
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="hover:text-brand transition-colors"
            >
              {i.label}
            </Link>
          ))}
          <Link
            href="https://donorbox.org/deviens-un-partenaire-mensuel-de-l-eglise-new-home-paris"
            target="_blank"
            className="ml-2 inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white hover:opacity-90 transition-opacity"
          >
            Donner
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/40 backdrop-blur hover:bg-white/60 transition"
          >
            <span
              className={[
                "absolute h-[2px] w-5 bg-black/80 transition-transform duration-200",
                open
                  ? "translate-y-0 rotate-45"
                  : "-translate-y-[5px] rotate-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute h-[2px] w-5 bg-black/80 transition-transform duration-200",
                open
                  ? "translate-y-0 -rotate-45"
                  : "translate-y-[5px] rotate-0",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden border-t border-black/10 bg-paper/95 backdrop-blur",
          "transition-[max-height,opacity] duration-200 ease-out",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-3 text-base">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-black/10 hover:text-brand transition-colors"
            >
              {i.label}
            </Link>
          ))}
          <Link
            href="https://donorbox.org/deviens-un-partenaire-mensuel-de-l-eglise-new-home-paris"
            target="_blank"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand px-4 py-3 text-white hover:opacity-90 transition-opacity"
          >
            Donner
          </Link>
        </nav>
      </div>
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={[
          "md:hidden fixed inset-0 z-40 bg-black/30 transition-opacity",
          "top-[600px]",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      />
    </header>
  );
}
