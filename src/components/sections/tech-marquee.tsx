import { techStack } from "@/lib/content";

function Set({ hidden = false }: { hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className="flex gap-11 whitespace-nowrap pr-11"
    >
      {techStack.map((tech) => (
        <span key={tech} className="contents">
          <span>{tech}</span>
          <span className="text-brand">/</span>
        </span>
      ))}
    </span>
  );
}

export function TechMarquee() {
  // Two identical sets, so translating the track by -50% loops seamlessly.
  return (
    <div
      aria-label="Technologies we work with"
      className="relative mb-16 overflow-hidden border-y border-line bg-white/80 py-[18px]"
    >
      <div className="marquee-track font-mono text-sm tracking-[0.06em] text-muted">
        <Set />
        <Set hidden />
      </div>
    </div>
  );
}
