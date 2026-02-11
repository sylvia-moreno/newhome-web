import Image from "next/image";
import "./Hero.css";

type HeroProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section className="hero">
      <Image src={imageUrl} alt="" fill priority className="hero__image" />

      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__inner">
          <h1 className="hero__title">{title}</h1>

          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
