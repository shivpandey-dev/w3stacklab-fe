import Link from "next/link";
import { services } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";

export function Services() {
  return (
    <Container className="flex flex-col gap-[52px] pb-28 pt-[72px]">
      <div id="services" className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <SectionLabel>Services</SectionLabel>
          <SectionHeading>Agents first. Web and mobile to match.</SectionHeading>
        </div>
        <Button href="#contact" variant="ghost" size="sm">
          Book a free call
        </Button>
      </div>

      <div className="rv grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="svc lift flex flex-col gap-3 rounded-[14px] border-t-4 border-brand bg-white px-7 py-8"
          >
            <span className="font-mono text-[13px] text-brand">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 font-display text-[22px] font-bold tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="m-0 text-muted">{service.body}</p>
            <Link
              href="#contact"
              className="mt-auto inline-flex min-h-11 items-center text-sm font-semibold text-brand"
            >
              Talk about this<span className="arrow">→</span>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
