import Image from "next/image";
import { founders } from "@/data/atelier";
import { SectionHeading } from "@/components/section-heading";

export function AtelierIntro() {
  return (
    <section className="atelier-section section-shell" id="about">
      <div className="atelier-intro-copy">
        <SectionHeading eyebrow="The people behind the lens" title="Every picture has a story. We help you tell yours." description="Meet Ashpak and Arju, the creative duo behind Magic Vision Photography. Their boutique studio celebrates motherhood, the wonder of newborn days, and the small milestones that make a family." />
        <blockquote className="founder-quote">“We believe in gentle storytelling, unhurried pacing, and making mothers feel like royalty.”<cite>— Ashpak & Arju, founders</cite></blockquote>
      </div>
      <div className="founder-grid">
        {founders.map((founder) => (
          <article className="founder-card" key={founder.name}>
            <div className="founder-image"><Image src={founder.image} alt={`${founder.name}, ${founder.intro}`} fill unoptimized sizes="(min-width: 900px) 28vw, 45vw" className="cover-image" /></div>
            <p className="eyebrow">{founder.intro}</p>
            <h3>{founder.name}</h3>
            <p className="founder-role">{founder.role}</p>
            <p className="founder-bio">{founder.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
