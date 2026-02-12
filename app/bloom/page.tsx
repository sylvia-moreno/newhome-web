import Container from "@/components/Container";
import { MediaTextRow } from "@/components/sections/MediaTextRow";
import Image from "next/image";

export const revalidate = 60;

export default function Page() {
  return (
    <section className="py-14">
      <Container>
        <p className="text-xs uppercase tracking-widest text-black/60">
          NewHome Paris
        </p>
        <h1 className="mt-4 font-title text-4xl md:text-5xl leading-[1.05]">
          <Image
            className="bloom-logo w-[220px] h-auto"
            src="/images/logo-bloom.png"
            alt="Bloom"
          />
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-black/70">
          Ministère des femmes, pour grandir, s’encourager et transmettre.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MediaTextRow
            title="Nos dernières soirées"
            media={{
              type: "slider",
              autoPlayMs: 3500,
              images: [
                { src: "/images/bloom-a.jpg", alt: "" },
                { src: "/images/bloom-b.jpg", alt: "" },
                { src: "/images/bloom-c.jpg", alt: "" },
                { src: "/images/bloom-d.jpg", alt: "" },
                { src: "/images/bloom-e.jpg", alt: "" },
              ],
            }}
          >
            <p>
              Selah, c’est un moment pour s’arrêter, respirer, et recentrer
              notre cœur sur Dieu. Un temps simple, profond, pour adorer
              ensemble.
            </p>
          </MediaTextRow>

          <MediaTextRow
            reverse
            media={{
              type: "video",
              src: "/videos/bloom-live.mov",
              poster: "/images/bloom-live-poster.jpg",
            }}
            title="À quoi s’attendre"
          >
            <p>
              Louange, prière, exhortation courte, puis un temps de réponse.
              Viens comme tu es.
            </p>
          </MediaTextRow>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {/* <a
            href="/evenements"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white hover:opacity-90 transition-opacity bg-color-brand"
          >
            Voir les événements Bloom
          </a> */}
          <a
            href="/"
            className="inline-flex items-center rounded-xl border border-black/15 bg-white px-5 py-3 hover:border-black/30 transition-colors"
          >
            Retour accueil
          </a>
        </div>
      </Container>
    </section>
  );
}
