import { site } from "@/lib/content";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream">
      <div aria-hidden className="dots absolute inset-0" />
      <Container className="relative flex flex-wrap gap-14 py-28">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[22px]">
          <SectionLabel>Contact</SectionLabel>
          <SectionHeading>Have something worth building?</SectionHeading>
          <p className="m-0 max-w-[420px] text-lg text-muted">
            Tell me what you want automated or built. I reply within one working
            day with honest next steps.
          </p>
          <div className="flex flex-col gap-1.5">
            <span>
              <b>Email:</b> {site.email}
            </span>
            <span>
              <b>WhatsApp:</b> {site.whatsapp}
            </span>
            <span>
              <b>Location:</b> {site.location}
            </span>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
