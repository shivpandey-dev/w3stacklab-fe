export type FeatureItem = { title: string; body: string };

type FeatureListProps = {
  items: FeatureItem[];
  className?: string;
};

/** Bullet list where each item has a bold title and a muted description. */
export function FeatureList({ items, className = "" }: FeatureListProps) {
  return (
    <ul className={`m-0 flex list-none flex-col gap-5 p-0 ${className}`}>
      {items.map((item) => (
        <li key={item.title} className="flex gap-3.5">
          <span
            aria-hidden
            className="mt-[9px] h-3 w-3 shrink-0 rounded-full bg-brand"
          />
          <div>
            <p className="m-0 font-display text-xl font-semibold leading-snug tracking-[-0.01em]">
              {item.title}
            </p>
            <p className="m-0 mt-1 max-w-[34rem] text-base text-muted">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
