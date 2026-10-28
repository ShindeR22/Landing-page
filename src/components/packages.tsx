import { experiencePackages } from "@/data/atelier";
import { SectionHeading } from "@/components/section-heading";
import { PackageCarousel } from "@/components/package-carousel";
import { PackageDetails } from "@/components/package-details";

function PackageCard({
  item,
  index,
}: {
  item: (typeof experiencePackages)[number];
  index: number;
}) {
  const whatsappMessage = `Hello Magic Vision Photography, I am interested in your ${item.name} package. Please share the details and availability.`;
  const whatsappUrl = `https://wa.me/917558250015?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article
      className={`package-card ${index === 0 ? "package-card-featured" : ""}`}
    >
      <div className="package-card-top">
        <span className="package-mood">{item.mood}</span>
        <span className="package-index">0{index + 1}</span>
      </div>
      <h3>{item.name}</h3>
      <p className="package-note">{item.note}</p>
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
            imageSrc={`/images/maternity-package-${index + 1}.webp`}
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
            description="Thoughtful sessions at our climate-safe studio or a beautiful outdoor location across Pune and PCMC."
          />
          <a className="text-link" href="#book">
            Compare packages <span aria-hidden="true">↓</span>
          </a>
        </div>
        {packageGroups.map((group) => {
          const items = experiencePackages.filter(
            (item) => item.group === group,
          );
          const cards = items.map((item, index) => (
            <PackageCard key={item.name} item={item} index={index} />
          ));

          return (
            <div className="package-group" key={group}>
              <h3 className="package-group-title">{group}</h3>
              {group === "Maternity Photography" ? (
                <PackageCarousel>{cards}</PackageCarousel>
              ) : (
                <div className="package-grid">{cards}</div>
              )}
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
          <p className="eyebrow">A little extra comfort, included</p>
          <div className="amenities-grid">
            <span>Private changing suite & nursery station</span>
            <span>Sterilised props, swaddles & organic fabrics</span>
            <span>Warm beverages & light refreshments</span>
            <span>Preview gallery within 48 hours</span>
            <span>Handcrafted archival album add-ons</span>
          </div>
          <p className="amenities-note">
            Custom location sessions across Hinjawadi, Baner, Wakad, Viman Nagar
            and PCMC are available by request.
          </p>
        </div>
      </div>
    </section>
  );
}
