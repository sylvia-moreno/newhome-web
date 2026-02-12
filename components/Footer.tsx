import Link from "next/link";
import { SITE } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="mx-auto max-w-6xl px-5 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-title text-xl font-bold">NewHome Paris</div>
          <p className="mt-2 text-sm text-black/70">
            Culte chaque dimanche à {SITE.serviceTime}. {SITE.address}.
          </p>
        </div>

        <div className="text-sm">
          <div className="uppercase tracking-widest text-xs text-black/60">
            Liens
          </div>
          <div className="mt-3 grid gap-2">
            <Link className="hover:text-brand" href={SITE.links.youtube}>
              YouTube
            </Link>
            <Link className="hover:text-brand" href={SITE.links.instagram}>
              Instagram
            </Link>
            <Link
              className="hover:text-brand"
              href="https://donorbox.org/deviens-un-partenaire-mensuel-de-l-eglise-new-home-paris"
              target="_blank"
            >
              Donner
            </Link>
            <Link className="hover:text-brand" href={SITE.links.maps}>
              Itinéraire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
