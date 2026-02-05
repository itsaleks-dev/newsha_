import { useEffect, useRef, useState } from "react";

const SWIPE_PX = 60; // порог по пикселям
const SWIPE_VELOCITY = 0.35; // px/ms

export function useBannerSlider(length: number) {
  const [index, setIndex] = useState(1);
  const [withAnimation, setWithAnimation] = useState(true);
  const [dragPx, setDragPx] = useState(0);

  const startX = useRef<number | null>(null);
  const startT = useRef<number>(0);
  const isDragging = useRef(false);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  const resetDrag = () => {
    startX.current = null;
    startT.current = 0;
    isDragging.current = false;
    setDragPx(0);
  };

  const onTransitionEnd = () => {
    // после "клона" прыгаем без анимации на реальный
    if (index === 0) {
      setWithAnimation(false);
      setIndex(length);
    } else if (index === length + 1) {
      setWithAnimation(false);
      setIndex(1);
    }
  };

  useEffect(() => {
    // вернуть анимацию после технического прыжка
    if (!withAnimation) {
      requestAnimationFrame(() => setWithAnimation(true));
    }
  }, [withAnimation]);

  const onPointerDown = (e: React.PointerEvent) => {
    // важно: захват pointer, иначе onPointerUp может не прийти
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    startX.current = e.clientX;
    startT.current = performance.now();
    isDragging.current = true;

    setWithAnimation(false);
    setDragPx(0);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || startX.current === null) return;

    const dx = e.clientX - startX.current;

    // чуть "резиново", чтобы не улетало слишком далеко
    const rubber = 0.9;
    setDragPx(dx * rubber);
  };

  const finishSwipe = (direction: "prev" | "next" | "stay") => {
    // включаем анимацию и возвращаем drag в 0 — будет плавный snap
    setWithAnimation(true);
    setDragPx(0);

    if (direction === "prev") prev();
    if (direction === "next") next();
  };

  const onPointerUp = () => {
    if (!isDragging.current || startX.current === null) {
      resetDrag();
      return;
    }

    const dx = dragPx; // уже с rubber
    const dt = Math.max(1, performance.now() - startT.current);
    const v = Math.abs(dx) / dt; // px/ms

    const shouldSwipe = Math.abs(dx) > SWIPE_PX || v > SWIPE_VELOCITY;

    if (shouldSwipe) {
      finishSwipe(dx > 0 ? "prev" : "next");
    } else {
      finishSwipe("stay");
    }

    resetDrag();
  };

  const onPointerCancel = () => {
    setWithAnimation(true);
    setDragPx(0);
    resetDrag();
  };

  return {
    index,
    withAnimation,
    dragPx,
    setIndex,
    next,
    prev,
    onTransitionEnd,
    swipeHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel,
    },
  };
}
