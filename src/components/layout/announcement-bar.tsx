import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-sm text-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-3.5 gap-y-2 px-5 py-2.5 sm:px-10">
        <span className="rounded bg-brand px-[9px] py-[3px] font-mono text-xs tracking-[0.08em]">
          NEW
        </span>
        <span className="text-line-strong">
          We are building a School Information Management System for K-12
          schools in India.
        </span>
        <Link
          href="#solutions"
          className="inline-flex min-h-6 items-center font-medium text-white underline"
        >
          See what is coming
        </Link>
      </div>
    </div>
  );
}
