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
          Vision
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-black/70">
          En quoi nous croyons.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MediaTextRow
            title="Une église pour aujourd’hui, enracinée dans l’essentiel."
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
              Nous croyons en une église vivante, ancrée dans la Parole, et
              pleinement présente dans son époque. Une église qui accueille, qui
              écoute, qui accompagne, sans masquer la vérité de l’Évangile.
            </p>
            <p>
              Notre vision est de voir des femmes et des hommes transformés par
              la rencontre avec Jésus, et envoyés pour aimer, servir, et
              impacter leur environnement, là où ils sont. Pas une foi
              déconnectée du réel, mais une foi incarnée, vécue au quotidien.
            </p>
            <p>
              Nous voulons construire une église où chacun peut trouver sa
              place, grandir, et marcher à son rythme, dans la grâce et la
              vérité.
            </p>
          </MediaTextRow>

          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              Marcher ensemble, grandir ensemble.
            </h2>
            <p>
              Nous aspirons à une communauté simple et authentique, où la
              relation avec Dieu nourrit la relation aux autres. Une église qui
              ne cherche pas la performance, mais la profondeur. Pas le
              paraître, mais le cœur.{" "}
            </p>
            <p>
              Nous croyons que la foi se vit dans les grands moments comme dans
              les petits, dans les célébrations comme dans le quotidien. C’est
              pourquoi nous encourageons une vie d’église rythmée par la
              louange, l’enseignement, la prière, et la communion fraternelle.
              Notre désir est de voir chacun découvrir son appel, exercer ses
              dons, et avancer avec confiance, soutenu par une communauté qui
              choisit l’amour, l’humilité, et la fidélité.
            </p>
          </div>
          {/* <a
            href="/"
            className="inline-flex items-center rounded-xl border border-black/15 bg-white px-5 py-3 hover:border-black/30 transition-colors"
          >
            Retour accueil
          </a> */}
        </div>
      </Container>
    </section>
  );
}
