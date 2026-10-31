import { featuredPoints } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Check } from "@/components/ui/icons";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div aria-hidden className="dark-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -bottom-[200px] -right-[100px] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(217,31,41,0.28),rgba(217,31,41,0)_65%)]"
      />

      <Container className="relative flex flex-wrap items-center gap-14 py-28">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
          <SectionLabel dark>Featured solution</SectionLabel>
          <SectionHeading>School Information Management System</SectionHeading>
          <p className="m-0 max-w-[520px] text-lg text-night-muted">
            An AI-powered system for K-12 private schools in India, bringing
            school operations into one place. Currently in development.
          </p>
          <ul className="m-0 flex list-none flex-col p-0">
            {featuredPoints.map((point, i) => (
              <li
                key={point}
                className={`flex items-center gap-3.5 border-t border-panel-line py-4 ${
                  i === featuredPoints.length - 1 ? "border-b" : ""
                }`}
              >
                <Check
                  width={20}
                  height={20}
                  strokeWidth={2.4}
                  className="shrink-0 text-brand-light"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-1 flex flex-wrap gap-3">
            <Button href="#contact" size="md">
              Request early access
            </Button>
          </div>
        </div>

        <div className="relative min-w-0 flex-[1_1_420px]" aria-hidden>
          <div className="chip absolute -top-[18px] right-4 z-[2] flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[13px] font-semibold text-ink shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
            <span className="dot-live h-2 w-2 rounded-full bg-brand" />
            AI attendance alerts
          </div>
          <div className="chip absolute -bottom-4 -left-[18px] z-[2] rounded-xl bg-brand px-3.5 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] [animation-delay:-2.5s]">
            Fee reminders sent ✓
          </div>
          <div className="flex flex-col gap-3.5 rounded-[20px] border border-panel-line bg-panel p-5">
            <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-xl bg-panel-line text-sm text-night-muted">
              [Product screenshot]
              <span className="scanline" />
            </div>
            <div className="flex gap-3">
              <div className="h-14 flex-1 rounded-[10px] bg-panel-line" />
              <div className="h-14 flex-1 rounded-[10px] bg-panel-line" />
              <div className="h-14 flex-1 rounded-[10px] bg-brand" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
