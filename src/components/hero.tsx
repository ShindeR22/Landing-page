"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/atelier";

export function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  function move(step: number) {
    setActive((current) => (current + step + heroSlides.length) % heroSlides.length);
  }

  return (
    <section className="hero" aria-roledescription="carousel">
      <Image
        key={slide.image}
        className="hero-image"
        src={slide.image}
        alt={slide.alt}
        fill
        priority
        unoptimized
        sizes="100vw"
        style={{ objectPosition: slide.position || "center" }}
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-kicker"><span /> Boutique studio · Pune & Pimpri-Chinchwad</div>
        <h1>Every moment deserves to be <em>remembered.</em></h1>
        <p className="hero-intro">Beautifully capturing motherhood, new beginnings, and the tender little milestones that become lifelong family heirlooms.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#packages">Explore curated packages <span aria-hidden="true">↗</span></a>
          <a className="button button-light-outline" href="#portfolio">View editorial gallery <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-slide-caption"><span>{slide.eyebrow}</span><p>“{slide.quote}”</p></div>
      <div className="hero-controls">
        <div className="hero-dots" aria-label="Choose photograph">
          {heroSlides.map((item, index) => <button key={item.eyebrow} type="button" onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} aria-current={active === index ? "true" : undefined} />)}
        </div>
        <span className="hero-count">0{active + 1} <i>/</i> 0{heroSlides.length}</span>
        <div className="hero-arrows"><button type="button" onClick={() => move(-1)} aria-label="Previous photograph">←</button><button type="button" onClick={() => move(1)} aria-label="Next photograph">→</button></div>
      </div>
      <div className="hero-scroll">Scroll to discover <span aria-hidden="true">↓</span></div>
    </section>
  );
}
