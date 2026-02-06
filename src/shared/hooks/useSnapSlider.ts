import { useEffect, useRef, useState } from "react";

type Options = {
  itemsCount: number;
  gap?: number;
};

export function useSnapSlider({ itemsCount, gap = 0 }: Options) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const getStep = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return el.clientWidth;

      const width = first.getBoundingClientRect().width;
      return width + gap;
    };

    const onScroll = () => {
      const step = getStep();
      const index = Math.round(el.scrollLeft / step);
      setActive(Math.max(0, Math.min(index, itemsCount - 1)));
    };

    onScroll();

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [itemsCount, gap]);

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;

    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.getBoundingClientRect().width + gap : el.clientWidth;

    el.scrollTo({
      left: index * step,
      behavior: "smooth",
    });
  };

  return {
    trackRef,
    active,
    scrollTo,
  };
}
