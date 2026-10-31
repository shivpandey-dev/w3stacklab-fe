import Image from "next/image";

type ShapedImageProps = {
  /** Path under /public, e.g. "/assets/hero/mcp.webp". Omit to show a placeholder. */
  src?: string;
  alt?: string;
  /** Label shown on the placeholder, e.g. "MCP & LLM integrations". */
  placeholder: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Image in a frame with two large rounded corners (top-left, bottom-right).
 * Without a `src` it renders a labelled placeholder of the same shape, so the
 * layout can be reviewed before the artwork exists.
 */
export function ShapedImage({
  src,
  alt = "",
  placeholder,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
  className = "",
}: ShapedImageProps) {
  return (
    <div
      className={`relative aspect-[6/5.6] w-full overflow-hidden rounded-md rounded-br-[48px] rounded-tl-[48px] bg-surface sm:rounded-br-[72px] sm:rounded-tl-[72px] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`Placeholder image: ${placeholder}`}
          className="dots flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-line text-center"
        >
          <span className="h-[3px] w-10 bg-brand" aria-hidden />
          <span className="max-w-[16rem] px-4 font-mono text-[13px] text-muted">
            [Image: {placeholder}]
          </span>
        </div>
      )}
    </div>
  );
}
