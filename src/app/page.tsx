import { AtelierIntro } from "@/components/atelier-intro";
import { BookingSection } from "@/components/booking-section";
import { Hero } from "@/components/hero";
import { InstagramGrid } from "@/components/instagram-grid";
import { Packages } from "@/components/packages";
import { Portfolio } from "@/components/portfolio";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StudioValues } from "@/components/studio-values";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ScrollReveal />
      <main>
        <Hero />
        <AtelierIntro />

        <Portfolio />
        <Packages />
        <StudioValues />
        <Testimonial />
        {/* <InstagramGrid /> */}
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
