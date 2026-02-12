import { Hero } from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import Decouvrir from "@/components/sections/Decouvrir";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Bienvenue à New Home Church"
        subtitle="Une église pour l'ouest parisien"
        imageUrl="/images/home-hero.jpg"
      />

      <Vision
        text="Une église pertinente et jeune d’esprit; inclusive, créative et généreuse. Une église qui défie les perceptions et restaure l’image du christianisme auprès de la société. Une église centrée sur le message d’espoir et d’amour de Jésus-Christ. Une église qui aime Dieu, qui aime les gens, qui aime sa ville. Une église qui accompagne les gens dans leur cheminement spirituel et qui les équipe dans tous les domaines de leur vie afin qu’à leur tour, ils influencent celle des autres."
        title="Notre vision"
      />
      <Decouvrir
        heading="Découvrez NewHome"
        items={[
          {
            title: "La Vision",
            href: "/la-vision",
            imageSrc: "/images/vision.jpg",
          },
          {
            title: "Les pasteurs",
            href: "/les-pasteurs",
            imageSrc: "/images/pasteurs.jpg",
          },
          // {
          //   title: "Les ministères",
          //   href: "/les-ministeres",
          //   imageSrc: "/images/ministeres.jpg",
          // },
          {
            title: "Selah",
            href: "/selah",
            imageSrc: "/images/selah.jpg",
          },
          {
            title: "Bloom",
            href: "/bloom",
            imageSrc: "/images/bloom.jpg",
          },
        ]}
        autoPlayMs={4500}
      />
      <Contact/>
    </>
  );
}
