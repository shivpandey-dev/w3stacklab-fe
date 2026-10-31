import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useSyncExternalStore } from "react";

/** Subscribes to Embla events and reads one value from the API. */
function useEmblaValue(
  api: EmblaCarouselType | undefined,
  read: (api: EmblaCarouselType) => number,
) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      api?.on("select", onChange).on("reInit", onChange);
      return () => {
        api?.off("select", onChange).off("reInit", onChange);
      };
    },
    [api],
  );
  return useSyncExternalStore(
    subscribe,
    () => (api ? read(api) : 0),
    () => 0,
  );
}

const readSelected = (api: EmblaCarouselType) => api.selectedScrollSnap();
const readSnapCount = (api: EmblaCarouselType) => api.scrollSnapList().length;

/** Index of the snap Embla currently shows. */
export function useSelectedIndex(api: EmblaCarouselType | undefined) {
  return useEmblaValue(api, readSelected);
}

/** Number of snaps (dots). Changes when the container is resized. */
export function useSnapCount(api: EmblaCarouselType | undefined) {
  return useEmblaValue(api, readSnapCount);
}
