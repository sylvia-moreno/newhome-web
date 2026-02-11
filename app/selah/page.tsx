import Container from "@/components/Container";
import { MediaTextRow } from "@/components/sections/MediaTextRow";

export const revalidate = 60;

export default function Page() {
  return (
    <section className="py-14">
      <Container>
        <p className="text-xs uppercase tracking-widest text-black/60">
          NewHome Paris
        </p>
        <h1 className="mt-4 font-title text-4xl md:text-5xl leading-[1.05]">
          Selah
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-black/70">
          Soirée louange, un temps pour s’arrêter, adorer, et laisser Dieu
          parler.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MediaTextRow
            title="S’arrêter, vraiment."
            media={{
              type: "slider",
              autoPlayMs: 3500,
              images: [
                { src: "/images/selah-a.jpg", alt: "" },
                { src: "/images/selah-b.jpg", alt: "" },
                { src: "/images/selah-c.jpg", alt: "" },
                { src: "/images/selah-d.jpg", alt: "" },
                { src: "/images/selah-e.jpg", alt: "" },
                { src: "/images/selah-f.jpg", alt: "" },
              ],
            }}
          >
            <p>
              Dans nos vies souvent pleines, rapides, parfois bruyantes, Selah
              est une invitation à faire une pause. Une pause volontaire. Une
              pause choisie.
            </p>
            <p>
              {" "}
              Dans la Bible, Selah marque un arrêt, un silence, un moment pour
              méditer, laisser résonner ce qui vient d’être dit. C’est
              exactement l’esprit de ces soirées.{" "}
            </p>
            <p>
              {" "}
              Un temps pour ralentir, pour respirer, pour recentrer nos cœurs
              sur Dieu, sans performance, sans pression, simplement dans Sa
              présence.{" "}
            </p>
          </MediaTextRow>

          <MediaTextRow
            reverse
            media={{
              type: "video",
              src: "/videos/selah-live.mp4",
              poster: "/images/selah-live-poster.jpg",
            }}
            title="Parce que Dieu parle encore."
          >
            <p>
              Nous croyons que Dieu agit dans le calme autant que dans le chant.
              Qu’Il restaure dans la douceur autant que dans la puissance.{" "}
            </p>
            <p>
              que parfois, ce dont nous avons le plus besoin, c’est de nous
              arrêter pour L’écouter. Selah n’est pas un événement de plus,
              c’est un espace, un rythme, un souffle.
            </p>
            <p>
              {" "}
              Selah n’est pas un événement de plus, c’est un espace, un rythme,
              un souffle.{" "}
            </p>
            <p>
              Viens tel que tu es. Prends le temps. Laisse Dieu faire le reste.
            </p>
          </MediaTextRow>

          <a
            href="/evenements"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white hover:opacity-90 transition-opacity"
          >
            Voir les prochains rendez-vous
          </a>
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
