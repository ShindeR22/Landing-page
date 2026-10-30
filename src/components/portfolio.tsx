"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { atelierPhotos, matchesPhotoFilter, photoFilters, type AtelierPhoto, type PhotoFilter } from "@/data/atelier";
import { SectionHeading } from "@/components/section-heading";

function GalleryCard({ photo, index, onOpen }: { photo: AtelierPhoto; index: number; onOpen: (photo: AtelierPhoto) => void }) {
  return (
    <article className={`gallery-card gallery-card-${index + 1}`}>
      <button className="gallery-image-button" type="button" onClick={() => onOpen(photo)} aria-label={`Open ${photo.title} photograph`}>
        <Image src={photo.image} alt={photo.alt} fill unoptimized sizes="(min-width: 900px) 32vw, 90vw" className="gallery-image" />
        <span className="gallery-zoom" aria-hidden="true">＋</span>
      </button>
      <div className="gallery-caption"><div><p className="eyebrow">{photo.category} · {photo.location}</p><h3>{photo.title}</h3></div><span>{String(index + 1).padStart(2, "0")}</span></div>
    </article>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<PhotoFilter>("All Work");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const filteredPhotos = atelierPhotos.filter((photo) => matchesPhotoFilter(photo, filter));

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") setSelectedIndex((index) => index === null ? null : (index - 1 + filteredPhotos.length) % filteredPhotos.length);
      if (event.key === "ArrowRight") setSelectedIndex((index) => index === null ? null : (index + 1) % filteredPhotos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [selectedIndex, filteredPhotos.length]);

  const photos = filter === "All Work" ? filteredPhotos.slice(0, visibleCount) : filteredPhotos;
  const selected = selectedIndex === null ? null : filteredPhotos[selectedIndex];
  const showPrevious = () => setSelectedIndex((index) => index === null ? null : (index - 1 + filteredPhotos.length) % filteredPhotos.length);
  const showNext = () => setSelectedIndex((index) => index === null ? null : (index + 1) % filteredPhotos.length);

  const changeFilter = (nextFilter: PhotoFilter) => {
    setFilter(nextFilter);
    setVisibleCount(6);
  };

  return (
    <section className="portfolio-section section-shell" id="portfolio">
      <div className="portfolio-overline"><span>Our archival work</span><span>01 — 06</span></div>
      <div className="portfolio-heading"><SectionHeading eyebrow="A family heirloom in the making" title="Portraits of pure grace" description="A few quiet moments, kept forever. Tap a photograph to see it up close." /><a className="text-link" href="https://instagram.com/magicvision_photography" target="_blank" rel="noreferrer">See more on Instagram <span>↗</span></a></div>
      <div className="gallery-filters" aria-label="Filter photographs">{photoFilters.map((item) => <button className={`gallery-filter ${filter === item ? "gallery-filter-active" : ""}`} type="button" key={item} onClick={() => changeFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
      <div className="gallery-grid">{photos.map((photo) => <GalleryCard key={photo.title} photo={photo} index={atelierPhotos.indexOf(photo)} onOpen={() => setSelectedIndex(filteredPhotos.indexOf(photo))} />)}</div>
      {filter === "All Work" && visibleCount < filteredPhotos.length ? <div className="gallery-load-more"><button className="button button-secondary" type="button" onClick={() => setVisibleCount((count) => count + 6)}>View more</button></div> : null}
      {selected ? createPortal(<div className="gallery-modal" role="dialog" aria-modal="true" aria-label={`${selected.title} full view`} onClick={() => setSelectedIndex(null)}><button className="gallery-modal-close" type="button" aria-label="Close photograph" onClick={() => setSelectedIndex(null)}>×</button><div className="gallery-modal-viewer" onClick={(event) => event.stopPropagation()}><button className="gallery-modal-arrow gallery-modal-previous" type="button" aria-label="Previous photograph" onClick={showPrevious}>‹</button><div className="gallery-modal-image"><Image src={selected.image} alt={selected.alt} fill unoptimized sizes="100vw" className="gallery-image" /></div><button className="gallery-modal-arrow gallery-modal-next" type="button" aria-label="Next photograph" onClick={showNext}>›</button></div><p>{selected.title}<span>{selected.category} · {selected.location}</span></p><span className="gallery-modal-count">{selectedIndex! + 1} / {filteredPhotos.length}</span></div>, document.body) : null}
    </section>
  );
}
