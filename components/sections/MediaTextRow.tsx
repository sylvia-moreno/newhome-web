"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./MediaTextRow.module.css";
import Image from "next/image";

type ImageItem = { src: string; alt?: string };

type Media =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }
  | {
      type: "slider";
      images: ImageItem[];
      autoPlayMs?: number; // ex: 4000
      showDots?: boolean; // default true
    };

type MediaTextRowProps = {
  media: Media;
  title?: string;
  children: React.ReactNode;
  reverse?: boolean;
};

export function MediaTextRow({
  media,
  title,
  children,
  reverse = false,
}: MediaTextRowProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.row} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.mediaBox}>
          <MediaRenderer media={media} />
        </div>

        <div className={styles.text}>
          {title && <h2 className={styles.h2}>{title}</h2>}
          <div className={styles.p}>{children}</div>
        </div>
      </div>
    </section>
  );
}

function MediaRenderer({ media }: { media: Media }) {
  if (media.type === "video") {
    return (
      <video
        className={styles.media}
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        preload="metadata"
      />
    );
  }

  if (media.type === "image") {
    return (
      <Image
        className={styles.media}
        src={media.src}
        alt={media.alt ?? ""}
        loading="lazy"
      />
    );
  }

  return (
    <ImageSlider
      images={media.images}
      autoPlayMs={media.autoPlayMs}
      showDots={media.showDots}
    />
  );
}

function ImageSlider({
  images,
  autoPlayMs = 0,
  showDots = true,
}: {
  images: ImageItem[];
  autoPlayMs?: number;
  showDots?: boolean;
}) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const count = safeImages.length;

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    if (!autoPlayMs || autoPlayMs < 1200 || count <= 1) return;
    if (paused) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [autoPlayMs, paused, count]);

  if (count === 0) return null;

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className={styles.sliderViewport}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {safeImages.map((img, i) => (
            <Image
              key={`${img.src}-${i}`}
              className={styles.sliderImage}
              src={img.src}
              alt={img.alt ?? ""}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className={`${styles.sArrow} ${styles.sArrowLeft}`}
            onClick={goPrev}
            aria-label="Précédent"
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.sArrow} ${styles.sArrowRight}`}
            onClick={goNext}
            aria-label="Suivant"
          >
            ›
          </button>

          {showDots && (
            <div
              className={styles.dots}
              role="tablist"
              aria-label="Navigation du carrousel"
            >
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${
                    i === index ? styles.dotActive : ""
                  }`}
                  onClick={() => setIndex(i)}
                  aria-label={`Aller à l'image ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
