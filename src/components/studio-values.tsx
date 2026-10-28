import { studioStandards } from "@/data/atelier";
import { SectionHeading } from "@/components/section-heading";

const symbols = ["♡", "✳", "✧", "▤"];

export function StudioValues() {
  return (
    <section className="values-section" id="studio">
      <div className="section-shell values-inner">
        <SectionHeading eyebrow="The Magic Vision standard" title="Why Pune families entrust us with their precious chapters." />
        <div className="values-grid">
          {studioStandards.map((value, index) => <article className="value-card" key={value.title}><span className="value-symbol" aria-hidden="true">{symbols[index]}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
