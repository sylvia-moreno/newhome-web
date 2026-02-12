import Container from "@/components/Container";

export const revalidate = 60;

export default function Page() {
  return (
    <section className="py-14">
      <Container>
        <p className="text-xs uppercase tracking-widest text-black/60">
          New Home Church Paris
        </p>
        <h1 className="mt-4 font-title text-4xl md:text-5xl leading-[1.05]">
          Donner
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-black/70">
          Dons et offrandes, un geste de foi et de partenariat pour faire
          avancer l’Évangile.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://donorbox.org/deviens-un-partenaire-mensuel-de-l-eglise-new-home-paris"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-white hover:opacity-90 transition-opacity"
          >
            Donner maintenant
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
