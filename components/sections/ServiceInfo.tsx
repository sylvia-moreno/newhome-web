import Link from "next/link";
import Container from "@/components/Container";
import { SITE } from "@/lib/site";

export default function ServiceInfo() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-black/10 bg-white p-6">
            <div className="text-xs uppercase tracking-widest text-black/60">Culte</div>
            <div className="mt-2 font-title text-2xl">Dimanche {SITE.serviceTime}</div>
            <p className="mt-2 text-sm text-black/70">Accueil, louange, message, communion.</p>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-6 md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-black/60">Adresse</div>
            <div className="mt-2 text-lg">{SITE.address}</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={SITE.links.maps}
                className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white hover:opacity-90 transition-opacity"
              >
                Itinéraire
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 hover:border-black/30 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
