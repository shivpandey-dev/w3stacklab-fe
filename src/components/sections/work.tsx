import { caseStudies } from "@/lib/content";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";

export function Work() {
  return (
    <section id="work" className="bg-white">
      <Container className="flex flex-col gap-12 py-28">
        <div className="flex max-w-[680px] flex-col gap-3.5">
          <SectionLabel>Selected work</SectionLabel>
          <SectionHeading>What we have built, and what it did.</SectionHeading>
        </div>

        <div className="rv grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {caseStudies.map((study) => (
            <article
              key={study.label}
              className="lift flex flex-col gap-4 rounded-2xl border border-line bg-white p-8"
            >
              <span className="font-mono text-[13px] text-muted">
                {study.label}
              </span>
              <h3 className="m-0 font-display text-2xl font-bold tracking-[-0.02em]">
                {study.title}
              </h3>
              {study.rows.map((row) => (
                <div key={row.k} className="flex flex-col gap-0.5">
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-brand">
                    {row.k}
                  </span>
                  <span className="text-muted">{row.v}</span>
                </div>
              ))}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
