import styles from "./PageHeroMedia.module.css";
import Image from "next/image";

type PageHeroMediaProps = {
  title: string;
  subtitle?: string;
  media:
    | { type: "video"; src: string; poster?: string }
    | { type: "image"; src: string; alt?: string };
};

export function PageHeroMedia({ title, subtitle, media }: PageHeroMediaProps) {
  return (
    <section className={styles.wrap} aria-label={title}>
      <div className={styles.hero}>
        {media.type === "video" ? (
          <video
            className={styles.media}
            src={media.src}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Image
            className={styles.media}
            src={media.src}
            alt={media.alt ?? ""}
          />
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
