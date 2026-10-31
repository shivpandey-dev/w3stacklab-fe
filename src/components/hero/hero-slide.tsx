import type { HeroSlideData } from "@/lib/hero-slides";
import { AccentTitle } from "@/components/ui/accent-title";
import { Button } from "@/components/ui/button";
import { EyebrowPill } from "@/components/ui/eyebrow-pill";
import { FeatureList } from "@/components/ui/feature-list";
import { ArrowRight } from "@/components/ui/icons";
import { ShapedImage } from "@/components/ui/shaped-image";
import { DeviceStack } from "./device-stack";

type HeroSlideProps = {
  slide: HeroSlideData;
  /** The first slide holds the page's h1 and loads its image eagerly. */
  first?: boolean;
};

/** One carousel slide: copy on the left, visual on the right. */
export function HeroSlide({ slide, first = false }: HeroSlideProps) {
  const { eyebrow, title, description, points, actions, visual } = slide;

  return (
    <div className="flex flex-wrap items-center gap-14">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[26px]">
        {eyebrow && <EyebrowPill>{eyebrow}</EyebrowPill>}

        <AccentTitle accent={title.accent} level={first ? 1 : 2}>
          {title.rest}
        </AccentTitle>

        {description && (
          <p className="m-0 max-w-[540px] text-xl leading-[1.55] text-muted">
            {description}
          </p>
        )}
        {points && <FeatureList items={points} />}

        <div className="mt-1 flex flex-wrap gap-3">
          {actions.map((action, i) => (
            <Button
              key={action.label}
              href={action.href}
              variant={action.variant ?? "primary"}
            >
              {action.label}
              {i === 0 && action.variant !== "ghost" && <ArrowRight />}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_440px] justify-center">
        {visual.kind === "device-stack" ? (
          <DeviceStack />
        ) : (
          <ShapedImage
            src={visual.src}
            alt={visual.alt}
            placeholder={visual.placeholder}
            priority={first}
            className="max-w-[560px]"
          />
        )}
      </div>
    </div>
  );
}
