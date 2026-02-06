import { useEffect, useRef } from "react";

type Options = {
  speed?: number;
  pauseOnInteraction?: boolean;
};

export function useVerticalInfiniteScroll<T extends HTMLElement>({
  speed = 0.35,
  pauseOnInteraction = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let y = 0;
    let rafId: number;

    const animate = () => {
      if (!paused.current) {
        y += speed;

        const halfHeight = el.scrollHeight / 2;
        if (y >= halfHeight) y = 0;

        el.style.transform = `translate3d(0, -${y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const onPause = (e?: Event) => {
      paused.current = true;
      e?.preventDefault();
    };

    const onResume = () => {
      paused.current = false;
    };

    if (pauseOnInteraction) {
      el.addEventListener("mouseenter", onPause);
      el.addEventListener("mouseleave", onResume);
      el.addEventListener("touchstart", onPause);
      el.addEventListener("touchend", onResume);
      el.addEventListener("touchcancel", onResume);
      el.addEventListener("pointerdown", onPause);
      el.addEventListener("pointerup", onResume);
      el.addEventListener("pointercancel", onResume);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);

      if (pauseOnInteraction) {
        el.removeEventListener("mouseenter", onPause);
        el.removeEventListener("mouseleave", onResume);
        el.removeEventListener("touchstart", onPause);
        el.removeEventListener("touchend", onResume);
        el.removeEventListener("touchcancel", onResume);
        el.removeEventListener("pointerdown", onPause);
        el.removeEventListener("pointerup", onResume);
        el.removeEventListener("pointercancel", onResume);
      }
    };
  }, [speed, pauseOnInteraction]);

  return ref;
}
