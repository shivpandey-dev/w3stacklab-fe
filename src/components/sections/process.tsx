import { processSteps } from "@/lib/content";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";

export function Process() {
  return (
    <section id="process" className="bg-surface">
      <Container className="flex flex-col gap-[52px] pb-28 pt-[100px]">
        <div className="flex max-w-[640px] flex-col gap-3.5">
          <SectionLabel>How I work</SectionLabel>
          <SectionHeading>Plain steps, no surprises.</SectionHeading>
        </div>

        <div className="rv flex flex-wrap gap-8">
          {processSteps.map((step, i) => (
            <div
              key={step.title}
              className="step flex min-w-0 flex-[1_1_220px] flex-col gap-3.5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`step-dot inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-bold text-white ${
                    i === 0 ? "bg-brand" : "bg-ink"
                  }`}
                >
                  {i + 1}
                </span>
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="h-0.5 flex-1 bg-line-strong"
                  />
                )}
              </div>
              <h3 className="m-0 font-display text-[22px] font-bold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="m-0 text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
