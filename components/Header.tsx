import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/vision", label: "Vision" },
  { href: "/selah", label: "Selah" },
  { href: "/bloom", label: "Bloom" },
  { href: "/les-pasteurs", label: "Les pasteurs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="New Home Church Paris"
            width={38}
            height={38}
            priority
          />
          <div className="leading-tight">
            <div className="font-title text-lg font-bold">NewHome</div>
            <div className="text-xs uppercase tracking-widest text-black/60 text-centerx">
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
            href="/donner"
            className="ml-2 inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white hover:opacity-90 transition-opacity bg-color-brand"
          >
            Donner
          </Link>
        </nav>

        <Link
          href="/donner"
          className="md:hidden inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white hover:opacity-90 transition-opacity"
        >
          Donner
        </Link>
      </div>
    </header>
  );
}
