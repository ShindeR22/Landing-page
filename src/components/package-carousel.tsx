"use client";

import { useRef, type ReactNode } from "react";

export function PackageCarousel({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".package-card");
    if (!card) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  }

  return (
    <>
      <div className="package-carousel-toolbar">
        <p className="package-carousel-hint"><span aria-hidden="true">↔</span> Six packages <span className="package-carousel-hint-divider">·</span> Use arrows or swipe to explore</p>
        <div className="maternity-carousel-nav" aria-label="Maternity package navigation">
          <button className="maternity-carousel-button maternity-carousel-prev" type="button" aria-label="Scroll to previous maternity package" onClick={() => scrollByCard(-1)}><span aria-hidden="true">←</span><span>Previous</span></button>
          <button className="maternity-carousel-button maternity-carousel-next" type="button" aria-label="Scroll to next maternity package" onClick={() => scrollByCard(1)}><span>Next packages</span><span aria-hidden="true">→</span></button>
        </div>
      </div>
      <div className="package-grid package-grid-horizontal" ref={trackRef}>
        {children}
      </div>
    </>
  );
}
