import Image from "next/image";

type PersonCardProps = {
  name: string;
  role: string;
  /** Path under /public. Omit to show a placeholder. */
  photo?: string;
  className?: string;
};

/**
 * Photo with a name plate that overlaps its bottom edge. Without a `photo`
 * it shows a labelled placeholder so the layout can be reviewed first.
 */
export function PersonCard({ name, role, photo, className = "" }: PersonCardProps) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl bg-line">
        {photo ? (
          <Image
            src={photo}
            alt={`${name}, ${role}`}
            fill
            sizes="(min-width: 1024px) 320px, 80vw"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label="Placeholder for a team photo"
            className="dots flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-line text-center"
          >
            <span className="h-[3px] w-10 bg-brand" aria-hidden />
            <span className="font-mono text-[13px] text-muted">[Photo]</span>
          </div>
        )}
      </div>

      <figcaption className="relative z-[1] -mt-7 mx-5 rounded-xl border-t-[6px] border-brand bg-white px-4 pb-6 pt-5 text-center shadow-[0_10px_28px_rgba(20,22,26,0.1)]">
        <div className="font-display text-xl font-bold tracking-[-0.02em]">{name}</div>
        <div className="mt-1 text-sm text-muted">{role}</div>
      </figcaption>
    </figure>
  );
}
