import Link from "next/link";
import Container from "@/components/Container";

export default function CTADuo() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-black/10 bg-white p-7">
            <div className="text-xs uppercase tracking-widest text-black/60">Découvrir</div>
            <div className="mt-2 font-title text-2xl">Nouveau ici ?</div>
            <p className="mt-3 text-sm text-black/70">
              Si tu viens pour la première fois, on t’accueille avec joie. Tu peux arriver 10 min avant.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-white hover:opacity-90 transition-opacity">
                Poser une question
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-7">
            <div className="text-xs uppercase tracking-widest text-black/60">Grandir</div>
            <div className="mt-2 font-title text-2xl">Rejoindre une équipe</div>
            <p className="mt-3 text-sm text-black/70">
              Il y a une place pour toi, servir avec un cœur simple, et construire ensemble.
            </p>
            <div className="mt-5">
              <Link href="/les-pasteurs" className="inline-flex items-center rounded-xl border border-black/15 bg-white px-4 py-2 hover:border-black/30 transition-colors">
                Parler à quelqu’un
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
