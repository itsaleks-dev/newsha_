import { useEffect, useRef, useState } from "react";

const SWIPE_THRESHOLD = 50;

export function useBannerSlider(length: number) {
  const [index, setIndex] = useState(1);
  const [withAnimation, setWithAnimation] = useState(true);

  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  const onTransitionEnd = () => {
    if (index === 0) {
      setWithAnimation(false);
      setIndex(length);
    }

    if (index === length + 1) {
      setWithAnimation(false);
      setIndex(1);
    }
  };

  useEffect(() => {
    if (!withAnimation) {
      requestAnimationFrame(() => setWithAnimation(true));
    }
  }, [withAnimation]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
  };

  const onPointerUp = () => {
    if (startX.current === null) return;

    if (deltaX.current > SWIPE_THRESHOLD) prev();
    if (deltaX.current < -SWIPE_THRESHOLD) next();

    startX.current = null;
    deltaX.current = 0;
  };

  return {
    index,
    withAnimation,
    setIndex,
    next,
    prev,
    onTransitionEnd,
    swipeHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
    },
  };
}
