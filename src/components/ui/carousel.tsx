"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { useMemo, useState, type KeyboardEvent, type ReactNode } from "react";
import { useSelectedIndex } from "@/lib/hooks/use-embla-state";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { IconButton } from "./icon-button";
import { ChevronLeft, ChevronRight, Pause, Play } from "./icons";

type CarouselProps = {
  /** Accessible name for the whole carousel, e.g. "Highlights". */
  label: string;
  /** One node per slide. The tallest slide sets the carousel's height. */
  slides: ReactNode[];
  /** Time each slide stays up, in ms. 0 turns autoplay off. */
  autoPlayMs?: number;
  className?: string;
  /** Extra classes for the controls row (spacing, alignment). */
  controlsClassName?: string;
};

// `duration` is Embla's slide animation speed (higher is slower); `dragFree`
// stays off so a drag always settles on a whole slide.
const EMBLA_OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

/**
 * Sliding carousel built on Embla Carousel (embla-carousel-react) with its
 * Autoplay plugin. Embla handles drag-to-scroll (mouse and touch), looping,
 * and autoplay (pause on hover and on slide focus, pause while the tab is
 * hidden, off for `prefers-reduced-motion`). This component adds the markup,
 * dots, previous/next, arrow keys and a visible pause/play button.
 */
export function Carousel({
  label,
  slides,
  autoPlayMs = 6000,
  className = "",
  controlsClassName = "",
}: CarouselProps) {
  const count = slides.length;
  const reducedMotion = usePrefersReducedMotion();
  const [userPaused, setUserPaused] = useState(false);

  const plugins = useMemo(
    () => [
      Autoplay({
        delay: autoPlayMs,
        active: autoPlayMs > 0 && !userPaused,
        stopOnInteraction: false, // resume after a swipe or click
        stopOnMouseEnter: true, // hover anywhere on the carousel pauses it
        rootNode: (viewport) => viewport.closest<HTMLElement>("[data-carousel]"),
        breakpoints: { "(prefers-reduced-motion: reduce)": { active: false } },
      }),
    ],
    [autoPlayMs, userPaused],
  );

  const [viewportRef, api] = useEmblaCarousel(EMBLA_OPTIONS, plugins);
  const selected = useSelectedIndex(api);

  const playing = autoPlayMs > 0 && !userPaused && !reducedMotion;

  function onControlsKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      api?.scrollNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      api?.scrollPrev();
    }
  }

  return (
    <div
      data-carousel
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
    >
      {/* Vertical padding keeps shadows and floating chips from being clipped. */}
      <div
        ref={viewportRef}
        className="-my-8 cursor-grab overflow-hidden py-8 active:cursor-grabbing"
      >
        <div
          className="-ml-10 flex touch-pan-y"
          // Announce slide changes only when the visitor, not the timer, caused them.
          aria-live={playing ? "off" : "polite"}
        >
          {slides.map((slide, i) => {
            const active = i === selected;
            return (
              <div
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={!active}
                inert={!active}
                className="min-w-0 flex-[0_0_100%] pl-10"
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>

      {count > 1 && (
        <div
          className={`flex flex-wrap items-center gap-2 ${controlsClassName}`}
          onKeyDown={onControlsKeyDown}
        >
          <IconButton label="Previous slide" onClick={() => api?.scrollPrev()}>
            <ChevronLeft />
          </IconButton>

          <div role="group" aria-label="Choose a slide" className="flex items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === selected}
                onClick={() => api?.scrollTo(i)}
                className="flex h-11 cursor-pointer items-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
                    i === selected ? "w-10 bg-brand" : "w-2.5 bg-line-strong"
                  }`}
                />
              </button>
            ))}
          </div>

          <IconButton label="Next slide" onClick={() => api?.scrollNext()}>
            <ChevronRight />
          </IconButton>

          {autoPlayMs > 0 && (
            <IconButton
              label={userPaused ? "Play slideshow" : "Pause slideshow"}
              onClick={() => setUserPaused((paused) => !paused)}
              className="ml-2 motion-reduce:hidden"
            >
              {userPaused ? <Play width={16} height={16} /> : <Pause width={16} height={16} />}
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
}
