import { BookingForm } from "@/components/booking-form";
import { SectionHeading } from "@/components/section-heading";

export function BookingSection() {
  return (
    <section className="booking-section" id="book">
      <div className="section-shell booking-inner">
        <div className="booking-copy">
          <SectionHeading
            eyebrow="Reserve your date"
            title="Let’s create memories together."
            description="Tell us which moments you would love to capture. We will help you choose the right photoshoot experience for your family."
          />
          <div className="booking-phone">
            <span>Direct telephone support</span>
            <a href="tel:+917558250015">+91 95951 44144</a>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
