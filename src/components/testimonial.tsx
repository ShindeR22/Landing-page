"use client";

import { useState } from "react";

const familyWords = [
  { quote: "Ashpak and Arju made me feel so calm and beautiful at 32 weeks pregnant. Arju helped with every fold of my saree, and the portraits feel like paintings.", place: "Wakad, Pune", names: "Priyanka & Kedar Deshmukh", session: "Maternity session", initial: "P" },
  { quote: "We were nervous bringing our 16-day-old baby girl, but the studio was warm, spotless, and cozy. Arju has the gentlest way with babies.", place: "Baner, Pune", names: "Snehal & Rohit Patil", session: "Newborn session", initial: "S" },
  { quote: "The cake smash was so much fun. Ashpak was patient and waited for real smiles instead of forcing poses. We already love the album.", place: "Pimpri-Chinchwad", names: "Manasi & Anand Jagtap", session: "First birthday", initial: "M" },
];

export function Testimonial() {
  const [active, setActive] = useState(0);
  const story = familyWords[active];
  const step = (direction: number) => setActive((current) => (current + direction + familyWords.length) % familyWords.length);

  return (
    <section className="testimonial-section section-shell" aria-label="Family reviews">
      <div className="testimonial-heading"><p className="eyebrow">Words from parents</p><h2>Cherished memories,<br /><em>genuine love.</em></h2><p>Read how families across Pune and PCMC experienced their studio day with us.</p></div>
      <article className="testimonial-card">
        <div className="testimonial-top"><span className="stars" aria-label="5 out of 5 stars">★★★★★</span><span>{story.place}</span></div>
        <blockquote>“{story.quote}”</blockquote>
        <div className="testimonial-bottom"><div className="testimonial-person"><span className="testimonial-avatar">{story.initial}</span><div><p className="testimonial-author">{story.names}</p><p className="testimonial-event">{story.session}</p></div></div><div className="testimonial-controls"><span>0{active + 1} / 0{familyWords.length}</span><button type="button" aria-label="Previous review" onClick={() => step(-1)}>←</button><button type="button" aria-label="Next review" onClick={() => step(1)}>→</button></div></div>
      </article>
    </section>
  );
}
