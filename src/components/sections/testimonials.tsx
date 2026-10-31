import { testimonials } from "@/lib/content";
import { Quote } from "@/components/ui/icons";
import { Container, SectionHeading } from "@/components/ui/section";

export function Testimonials() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col gap-12 py-28">
        <SectionHeading className="max-w-[720px]">
          What clients <span className="text-brand">say about working with us.</span>
        </SectionHeading>

        <div className="rv grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="lift m-0 flex flex-col gap-[22px] rounded-2xl border border-line bg-[linear-gradient(180deg,#fff_60%,#f2f2f2)] p-8"
            >
              <Quote width={30} height={30} className="text-brand" />
              <blockquote className="m-0 text-lg leading-normal">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span aria-hidden className="h-11 w-11 rounded-full bg-surface" />
                <span className="flex flex-col">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
