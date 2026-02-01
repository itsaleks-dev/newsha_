import { useEffect, useRef, useState } from "react";

export function useTypingPlaceholder(
  list: readonly string[],
  enabled: boolean,
  typingDelay = 60,
  pauseDelay = 1600,
) {
  const [text, setText] = useState("");

  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    if (!enabled || list.length === 0) {
      timer.current = setTimeout(() => {
        setText("");
        phraseIndex.current = 0;
        charIndex.current = 0;
      }, 0);

      return () => {
        if (timer.current) clearTimeout(timer.current);
      };
    }

    const tick = () => {
      const phrase = list[phraseIndex.current] ?? "";

      if (charIndex.current <= phrase.length) {
        setText(phrase.slice(0, charIndex.current));
        charIndex.current++;

        timer.current = setTimeout(tick, typingDelay);
      } else {
        timer.current = setTimeout(() => {
          phraseIndex.current = (phraseIndex.current + 1) % list.length;
          charIndex.current = 0;
          setText("");
          timer.current = setTimeout(tick, typingDelay);
        }, pauseDelay);
      }
    };

    tick();

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [enabled, list, typingDelay, pauseDelay]);

  return text;
}
