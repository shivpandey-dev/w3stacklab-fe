"use client";

import {
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/use-prefers-reduced-motion";
import { IconButton } from "./icon-button";
import { ChevronLeft, ChevronRight, Pause, Play } from "./icons";

type CarouselProps = {
  /** Accessible name for the whole carousel, e.g. "Highlights". */
  label: string;
  /** One node per slide. They share one grid cell, so the tallest sets the height. */
  slides: ReactNode[];
  /** Time each slide stays up, in ms. 0 turns autoplay off. */
  autoPlayMs?: number;
  className?: string;
  /** Extra classes for the controls row (spacing, alignment). */
  controlsClassName?: string;
};

const SWIPE_PX = 50;

/**
 * Accessible slide carousel (crossfade).
 *
 * - Autoplay is driven by the active dot's progress bar: when its animation
 *   ends, the next slide shows. Pausing freezes that animation, so the bar and
 *   the timing can never drift apart.
 * - Autoplay pauses on mouse hover and on keyboard focus, has a visible
 *   pause/play button, and is off for visitors who prefer reduced motion.
 * - Controls: previous/next, one dot per slide, arrow keys, touch swipe.
 * - Hidden slides are `inert` and `aria-hidden`.
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

  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const swipeStartX = useRef<number | null>(null);

  const canAutoPlay = autoPlayMs > 0 && count > 1 && !reducedMotion;
  const playing = canAutoPlay && !userPaused;
  const holding = hovered || keyboardFocus; // temporary pause

  const goTo = (target: number) => setIndex(((target % count) + count) % count);

  function onPointerEnter(event: PointerEvent) {
    if (event.pointerType === "mouse") setHovered(true);
  }

  function onFocus(event: FocusEvent) {
    // Only keyboard focus pauses; clicking a dot with the mouse should not.
    if (event.target.matches(":focus-visible")) setKeyboardFocus(true);
  }

  function onBlur(event: FocusEvent) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setKeyboardFocus(false);
    }
  }

  function onSwipeStart(event: PointerEvent) {
    if (event.pointerType === "mouse") return;
    swipeStartX.current = event.clientX;
  }

  function onSwipeEnd(event: PointerEvent) {
    if (swipeStartX.current === null) return;
    const dx = event.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (Math.abs(dx) >= SWIPE_PX) goTo(index + (dx < 0 ? 1 : -1));
  }

  function onControlsKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
      onPointerEnter={onPointerEnter}
      onPointerLeave={() => setHovered(false)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div
        className="grid touch-pan-y"
        // Announce slide changes only when the user, not the timer, caused them.
        aria-live={playing ? "off" : "polite"}
        onPointerDown={onSwipeStart}
        onPointerUp={onSwipeEnd}
        onPointerCancel={() => (swipeStartX.current = null)}
      >
        {slides.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={!active}
              inert={!active}
              className={`col-start-1 row-start-1 transition-[opacity,transform,visibility] duration-[450ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transform-none motion-reduce:duration-200 ${
                active
                  ? "visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible translate-y-3 opacity-0"
              }`}
            >
              {slide}
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <div
          className={`flex flex-wrap items-center gap-2 ${controlsClassName}`}
          onKeyDown={onControlsKeyDown}
        >
          <IconButton label="Previous slide" onClick={() => goTo(index - 1)}>
            <ChevronLeft />
          </IconButton>

          <div role="group" aria-label="Choose a slide" className="flex items-center">
            {slides.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={active}
                  onClick={() => goTo(i)}
                  className="flex h-11 cursor-pointer items-center px-1"
                >
                  <span
                    className={`relative block h-1.5 overflow-hidden rounded-full bg-line-strong ${
                      active ? "w-10" : "w-2.5"
                    }`}
                  >
                    {active && (
                      <span
                        // New key per slide restarts the progress animation.
                        key={index}
                        className={`absolute inset-0 origin-left rounded-full bg-brand ${
                          playing ? "carousel-progress" : ""
                        }`}
                        style={{
                          animationDuration: `${autoPlayMs}ms`,
                          animationPlayState: holding ? "paused" : "running",
                        }}
                        onAnimationEnd={() => goTo(index + 1)}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <IconButton label="Next slide" onClick={() => goTo(index + 1)}>
            <ChevronRight />
          </IconButton>

          {canAutoPlay && (
            <IconButton
              label={userPaused ? "Play slideshow" : "Pause slideshow"}
              onClick={() => setUserPaused((paused) => !paused)}
              className="ml-2"
            >
              {userPaused ? <Play width={16} height={16} /> : <Pause width={16} height={16} />}
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
}
