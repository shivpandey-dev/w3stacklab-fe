import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-[3px] w-10 ${dark ? "bg-brand-light" : "bg-brand"}`}
        aria-hidden
      />
      <span
        className={`font-mono text-[13px] uppercase tracking-[0.1em] ${
          dark ? "text-night-muted" : "text-muted"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`m-0 font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.035em] ${className}`}
    >
      {children}
    </h2>
  );
}
