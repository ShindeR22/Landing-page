import Image from "next/image";
import { founders } from "@/data/atelier";
import { SectionHeading } from "@/components/section-heading";

export function AtelierIntro() {
  return (
    <section className="atelier-section section-shell" id="about">
      <div className="atelier-intro-copy">
        <p className="atelier-kicker"><span>01</span> About us</p>
        <SectionHeading eyebrow="Meet your photographers" title="We’re here to capture your family’s story." description="We’re Ashpak and Arju, the team behind Magic Vision Photography. We take maternity, newborn, and family portraits in a calm and friendly space. Relax and enjoy the moment. We’ll take care of the photos." />
        <blockquote className="founder-quote"><span className="quote-mark" aria-hidden="true">“</span><span>We want you to feel at ease and enjoy every moment.</span><cite>— Ashpak & Arju</cite></blockquote>
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
