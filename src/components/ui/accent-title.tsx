import type { ReactNode } from "react";

type AccentTitleProps = {
  /** The brand-red part, shown first. */
  accent: ReactNode;
  /** The rest of the headline, in the normal text colour. */
  children?: ReactNode;
  /** Use 1 only once per page; carousel slides after the first use 2. */
  level?: 1 | 2;
  className?: string;
};

/** Large display headline with a red lead-in: "<red>Accent</red> rest". */
export function AccentTitle({
  accent,
  children,
  level = 2,
  className = "",
}: AccentTitleProps) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <Tag
      className={`m-0 font-display text-[clamp(40px,5.6vw,72px)] font-extrabold leading-[1.02] tracking-[-0.04em] ${className}`}
    >
      <span className="text-brand">{accent}</span>
      {children ? <> {children}</> : null}
    </Tag>
  );
}
