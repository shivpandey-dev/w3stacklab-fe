import { stats } from "@/lib/content";

// Overlaps the section below it by 64px (the -top / -mb pair).
export function Stats() {
  return (
    <div className="mx-auto max-w-[1040px] px-5 sm:px-10">
      <dl className="relative -top-16 -mb-16 flex flex-wrap rounded-2xl border border-line bg-white shadow-[0_16px_36px_rgba(20,22,26,0.08)]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-[1_1_220px] flex-col-reverse gap-1 border-b border-line px-6 py-7 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="m-0 font-display text-[34px] font-extrabold tracking-[-0.02em] text-brand">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
