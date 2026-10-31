"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import type { KeyboardEvent, ReactNode } from "react";
import { useSelectedIndex, useSnapCount } from "@/lib/hooks/use-embla-state";
import { IconButton } from "./icon-button";
import { ChevronLeft, ChevronRight } from "./icons";

type ScrollRowProps = {
  /** Accessible name for the row, e.g. "Leadership". */
  label: string;
  /** One node per item. */
  items: ReactNode[];
  /** Sets each item's width, e.g. "flex-[0_0_min(300px,80%)]". */
  itemClassName: string;
  className?: string;
  /** Extra classes for the controls row (spacing, alignment). */
  controlsClassName?: string;
};

const EMBLA_OPTIONS: EmblaOptionsType = {
  align: "start",
  containScroll: "trimSnaps",
};

/**
 * Row of items that scrolls by dragging (mouse or touch), with dots and
 * previous/next buttons. Built on Embla Carousel. Unlike `Carousel`, several
 * items are visible at once and it does not loop or autoplay.
 */
export function ScrollRow({
  label,
  items,
  itemClassName,
  className = "",
  controlsClassName = "",
}: ScrollRowProps) {
  const [viewportRef, api] = useEmblaCarousel(EMBLA_OPTIONS);
  const selected = useSelectedIndex(api);
  const snapCount = useSnapCount(api);

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
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
    >
      {/* Vertical padding keeps shadows from being clipped. */}
      <div
        ref={viewportRef}
        className="-my-6 cursor-grab overflow-hidden py-6 active:cursor-grabbing"
      >
        <div className="-ml-5 flex touch-pan-y select-none">
          {items.map((item, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              className={`min-w-0 pl-5 ${itemClassName}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {snapCount > 1 && (
        <div
          className={`flex flex-wrap items-center gap-2 ${controlsClassName}`}
          onKeyDown={onControlsKeyDown}
        >
          <IconButton
            label="Previous"
            disabled={selected === 0}
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft />
          </IconButton>

          <div role="group" aria-label="Choose a position" className="flex items-center">
            {Array.from({ length: snapCount }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to position ${i + 1}`}
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

          <IconButton
            label="Next"
            disabled={selected === snapCount - 1}
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight />
          </IconButton>
        </div>
      )}
    </div>
  );
}
