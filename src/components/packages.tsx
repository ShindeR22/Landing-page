import { experiencePackages } from "@/data/atelier";
import { SectionHeading } from "@/components/section-heading";
import { PackageDetails } from "@/components/package-details";

const maternityHighlights: Record<string, { setting: string; bestFor: string; difference: string }> = {
  "Maternity Package 1": { setting: "Studio + Garden", bestFor: "A lower-cost mix of indoor and outdoor portraits", difference: "2 outfit changes · 15 edited photos" },
  "Maternity Package 2": { setting: "Studio", bestFor: "Studio portraits with makeup artist available", difference: "2 outfit changes · 15 edited photos" },
  "Maternity Package 3": { setting: "Studio + Garden", bestFor: "More outfit variety and a short reel", difference: "3 outfit changes · 25 edited photos · 30-sec reel" },
  "Maternity Package 4": { setting: "Shiv Shahi Wada", bestFor: "A heritage location session", difference: "1 outfit change · 20 edited photos · 1-min reel" },
  "Maternity Package 5": { setting: "Wada + Studio + Garden", bestFor: "All three settings in one session", difference: "3 outfit changes · 30 edited photos · 1-min reel" },
  "Maternity Package 6": { setting: "Weekday home session", bestFor: "A weekday shoot at home", difference: "2 outfit changes · 20 edited photos · 30-sec reel" },
};

function PackageCard({
  item,
  index,
}: {
  item: (typeof experiencePackages)[number];
  index: number;
}) {
  const packageNumber = Number(item.name.match(/\d+$/)?.[0] ?? index + 1);
  const whatsappMessage = `Hello Magic Vision Photography, I am interested in your ${item.name} package. Please share the details and availability.`;
  const whatsappUrl = `https://wa.me/917558250015?text=${encodeURIComponent(whatsappMessage)}`;
  const maternityHighlight = maternityHighlights[item.name];

  return (
    <article
      className="package-card"
    >
      <div className="package-card-top">
        <span className="package-mood">{maternityHighlight?.setting ?? item.mood}</span>
        <span className="package-index">{String(packageNumber).padStart(2, "0")}</span>
      </div>
      <h3>{item.name}</h3>
      <p className="package-note">{maternityHighlight?.bestFor ?? item.note}</p>
      {maternityHighlight && <p className="package-difference">{maternityHighlight.difference}</p>}
      <div className="package-price">
        <span>
          {item.price === "Enquire for pricing"
            ? "Custom quote"
            : "Starting at"}
        </span>
        <strong>{item.price}</strong>
      </div>
      <ul>
        {item.includes.map((feature) => (
          <li key={feature}>
            <span aria-hidden="true">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div
        className={`package-actions ${item.group === "Maternity Photography" ? "package-actions-column" : ""}`}
      >
        {item.group === "Maternity Photography" && (
          <PackageDetails
            name={item.name}
            price={item.price}
            note={item.note}
            includes={item.includes}
            imageSrc={`/images/maternity-package-${packageNumber}.webp`}
          />
        )}
        <a
          className="button button-primary package-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Inquire on WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function Packages() {
  const packageGroups = [
    ...new Set(experiencePackages.map((item) => item.group)),
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="section-shell">
        <div className="packages-heading">
          <SectionHeading
            eyebrow="Transparent atelier pricing"
            title="Curated photoshoot experiences"
            description="Choose a studio, garden, heritage Wada or weekday home session. Compare the setting, outfit changes, edited photos and reel in each package."
          />
          <a className="text-link" href="#book">
            Need help choosing? <span aria-hidden="true">↓</span>
          </a>
        </div>
        {packageGroups.map((group) => {
          const items = experiencePackages.filter(
            (item) => item.group === group,
          );
          if (group === "Maternity Photography") {
            items.sort((a, b) => {
              const priceA = Number(a.price.replace(/[^\d]/g, "")) || Infinity;
              const priceB = Number(b.price.replace(/[^\d]/g, "")) || Infinity;
              return priceA - priceB;
            });
          }
          const cards = items.map((item, index) => (
            <PackageCard key={item.name} item={item} index={index} />
          ));

          return (
            <div className="package-group" key={group}>
              <h3 className="package-group-title">{group}</h3>
              <div className={`package-grid ${group === "Maternity Photography" ? "package-grid-maternity" : ""}`}>{cards}</div>
              {group === "Maternity Photography" && (
                <div className="package-terms">
                  <p className="eyebrow">Maternity package terms</p>
                  <p>
                    ₹500 advance is required to book. It is non-refundable, but
                    can be carried forward if a shoot is cancelled or postponed.
                    Location, garden and entry fees are extra where applicable.
                    Makeup is extra; jewelry rental is ₹500. Daughter’s dress or
                    saree rental is ₹500 each, and daughter’s makeup is ₹800.
                  </p>
                  <p>
                    Packages include digital soft copies only; albums and prints
                    are extra. Extra clicks or edits cost ₹200 each. Edited
                    photos are delivered 10–12 days after selection and full
                    payment. Photos are backed up for 60 days.
                  </p>
                </div>
              )}
            </div>
          );
        })}
        <div className="amenities-panel">
          <p className="eyebrow">Planning a studio session?</p>
          <p className="amenities-note">
            Please ask us to confirm changing space, nursery setup, prop and fabric cleaning, refreshments and preview gallery timing when you enquire. Availability and delivery timing can vary by session.
          </p>
          <p className="amenities-note">
            Custom location sessions across Hinjawadi, Baner, Wakad, Viman Nagar
            and PCMC are available by request.
          </p>
        </div>
      </div>
    </section>
  );
}
