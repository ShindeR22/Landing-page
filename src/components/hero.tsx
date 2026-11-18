"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/atelier";

const mobileHeroSlides = [
  {
    image: "/images/hero-mobile-1.webp",
    alt: "Expectant mother in a white gown with a pink flower crown",
    eyebrow: "Maternity portrait · Studio",
    quote: "A beautiful beginning, held close forever.",
  },
  {
    image: "/images/hero-mobile-2.jpg",
    alt: "Expectant mother in a flowing aqua gown at the studio",
    eyebrow: "Maternity portrait · Aqua dreams",
    quote: "A little one, already loved beyond measure.",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const slide = heroSlides[active];
  const mobileSlide = mobileHeroSlides[mobileActive];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setMobileActive((current) => (current + 1) % mobileHeroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  function move(step: number) {
    setActive((current) => (current + step + heroSlides.length) % heroSlides.length);
  }

  return (
    <section className="hero" aria-roledescription="carousel">
      <Image
        key={slide.image}
        className="hero-image hero-image-desktop"
        src={slide.image}
        alt={slide.alt}
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: slide.position || "center" }}
      />
      <Image
        key={mobileSlide.image}
        className="hero-image hero-image-mobile"
        src={mobileSlide.image}
        alt={mobileSlide.alt}
        fill
        sizes="(max-width: 620px) 100vw, 1px"
        style={{ objectPosition: "center" }}
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-kicker"><span /> Boutique studio · Pune & Pimpri-Chinchwad</div>
        <h1><span className="hero-title-desktop">Every moment deserves to be <em>remembered.</em></span><span className="hero-title-mobile">Moments worth <em>remembering.</em></span></h1>
        <p className="hero-intro"><span className="hero-intro-desktop">Beautifully capturing motherhood, new beginnings, and the tender little milestones that become lifelong family heirlooms.</span><span className="hero-intro-mobile">Maternity, newborn &amp; family portraits in Pune.</span></p>
        <div className="hero-actions">
          <a className="button button-primary" href="#packages">Explore curated packages <span aria-hidden="true">↗</span></a>
          <a className="button button-light-outline" href="#portfolio">View editorial gallery <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-slide-caption hero-slide-caption-desktop"><span>{slide.eyebrow}</span><p>“{slide.quote}”</p></div>
      <div className="hero-slide-caption hero-slide-caption-mobile"><span>{mobileSlide.eyebrow}</span><p>“{mobileSlide.quote}”</p></div>
      <div className="hero-controls hero-controls-desktop">
        <div className="hero-dots" aria-label="Choose photograph">
          {heroSlides.map((item, index) => <button key={item.eyebrow} type="button" onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} aria-current={active === index ? "true" : undefined} />)}
        </div>
        <span className="hero-count">0{active + 1} <i>/</i> 0{heroSlides.length}</span>
        <div className="hero-arrows"><button type="button" onClick={() => move(-1)} aria-label="Previous photograph">←</button><button type="button" onClick={() => move(1)} aria-label="Next photograph">→</button></div>
      </div>
      <div className="hero-controls hero-controls-mobile">
        <div className="hero-dots" aria-label="Choose mobile photograph">
          {mobileHeroSlides.map((item, index) => <button key={item.image} type="button" onClick={() => setMobileActive(index)} aria-label={`Show mobile slide ${index + 1}`} aria-current={mobileActive === index ? "true" : undefined} />)}
        </div>
        <span className="hero-count">0{mobileActive + 1} <i>/</i> 0{mobileHeroSlides.length}</span>
        <div className="hero-arrows"><button type="button" onClick={() => setMobileActive((current) => (current - 1 + mobileHeroSlides.length) % mobileHeroSlides.length)} aria-label="Previous mobile photograph">←</button><button type="button" onClick={() => setMobileActive((current) => (current + 1) % mobileHeroSlides.length)} aria-label="Next mobile photograph">→</button></div>
      </div>
      <div className="hero-scroll">Scroll to discover <span aria-hidden="true">↓</span></div>
    </section>
  );
}
