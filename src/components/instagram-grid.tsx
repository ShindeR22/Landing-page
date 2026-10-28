import Image from "next/image";
import { instagramPhotos } from "@/data/atelier";

export function InstagramGrid() {
  return (
    <section className="instagram-section">
      <div className="section-shell instagram-inner">
        <div className="instagram-heading"><p className="eyebrow">Follow our daily atelier</p><h2>More stories, more beautiful moments.</h2><p>Glimpses into recent shoots, behind-the-scenes, and happy families.</p></div>
        <div className="instagram-grid">{instagramPhotos.map((photo, index) => <a key={photo.image} className="instagram-tile" href="https://instagram.com/magicvision_photography" target="_blank" rel="noreferrer" aria-label={`See Instagram photo ${index + 1}`}><Image src={photo.image} alt={photo.alt} fill unoptimized sizes="(min-width: 900px) 16vw, 33vw" /><span>↗</span></a>)}</div>
        <a className="button button-secondary" href="https://instagram.com/magicvision_photography" target="_blank" rel="noreferrer">Follow @magicvision_photography <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
