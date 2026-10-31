import type { ReactNode } from "react";
import { Check } from "@/components/ui/icons";

/** Small rounded label with a red tick, shown above a headline. */
export function EyebrowPill({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-white/70 py-1.5 pl-2 pr-4 text-sm text-muted">
      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand">
        <Check width={12} height={12} stroke="#fff" strokeWidth={3.5} />
      </span>
      {children}
    </div>
  );
}
