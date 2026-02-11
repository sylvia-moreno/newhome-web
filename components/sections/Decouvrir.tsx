"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import "./Decouvrir.css";

type SiteItem = {
  title: string;
  href: string;
  imageSrc: string;
};

type DecouvrirProps = {
  heading?: string; // ex: "Découvrez NewHome"
  items: SiteItem[];
  autoPlayMs?: number; // ex: 4500
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useSlidesPerView() {
  const [spv, setSpv] = useState(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      // Ajuste selon ton design
      if (w < 640) return 1;
      if (w < 1024) return 2;
      return 3;
    };

    const onResize = () => setSpv(compute());
    setSpv(compute());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return spv;
}

export default function Decouvrir({
  heading = "Découvrez NewHome",
  items,
  autoPlayMs = 4500,
}: DecouvrirProps) {
  const slidesPerView = useSlidesPerView();
  const maxIndex = Math.max(0, items.length - slidesPerView);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const trackStyle = useMemo(() => {
    const gap = 24; // doit matcher le gap CSS
    const translatePct = (index * 100) / slidesPerView;
    // On translate en %, et on compense le gap en px (plus stable visuellement)
    return {
      transform: `translateX(calc(-${translatePct}% - ${index * gap}px))`,
    } as React.CSSProperties;
  }, [index, slidesPerView]);

  const goPrev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    if (paused || items.length <= slidesPerView) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, autoPlayMs);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, autoPlayMs, maxIndex, items.length, slidesPerView]);

  useEffect(() => {
    // Si on resize et que l'index devient invalide
    setIndex((i) => clamp(i, 0, maxIndex));
  }, [maxIndex]);

  return (
    <section className="section" aria-label={heading}>
      <h2 className="heading">{heading}</h2>

      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <button
          type="button"
          className={`${"arrow"} ${"arrowLeft"}`}
          onClick={goPrev}
          aria-label="Précédent"
        >
          ‹
        </button>

        <div className="viewport">
          <div className="track" style={trackStyle} aria-live="polite">
            {items.map((item) => (
              <article
                key={item.href}
                className="card"
                style={{
                  flexBasis: `calc((100% - ${
                    (slidesPerView - 1) * 24
                  }px) / ${slidesPerView})`,
                }}
              >
                <Link className="cardLink" href={item.href}>
                  <img
                    className="image"
                    src={item.imageSrc}
                    alt=""
                    loading="lazy"
                  />
                  <div className="overlay" />
                  <div className="cardContent">
                    <h3 className="cardTitle">{item.title}</h3>
                    <span className="cta">Découvrir</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`${"arrow"} ${"arrowRight"}`}
          onClick={goNext}
          aria-label="Suivant"
        >
          ›
        </button>
      </div>
    </section>
  );
}
