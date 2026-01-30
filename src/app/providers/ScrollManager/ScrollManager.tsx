import { useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const SCROLL_PERSIST_PATHS = ["/catalog", "/products"] as const;

type ScrollMap = Record<string, number>;

type HistoryStateWithScroll = {
  __scroll?: ScrollMap;
};

function shouldPersistScroll(pathname: string) {
  return SCROLL_PERSIST_PATHS.some((p) => pathname.startsWith(p));
}

function getScrollKey(pathname: string, search: string) {
  return `${pathname}${search}`;
}

function readScrollMap(): ScrollMap {
  return (history.state as HistoryStateWithScroll | null)?.__scroll ?? {};
}

function writeScrollMap(scroll: ScrollMap) {
  history.replaceState({ ...(history.state ?? {}), __scroll: scroll }, "");
}

export function ScrollManager() {
  const { pathname, search } = useLocation();
  const navigationType = useNavigationType();

  const key = useMemo(() => getScrollKey(pathname, search), [pathname, search]);

  const prevKeyRef = useRef<string | null>(null);
  const prevPersistRef = useRef(false);

  useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (prevKey && prevPersistRef.current) {
      const scrollMap = readScrollMap();
      scrollMap[prevKey] = window.scrollY;
      writeScrollMap(scrollMap);
    }

    const shouldPersist = shouldPersistScroll(pathname);
    const scrollMap = readScrollMap();
    const savedY = scrollMap[key];

    if (navigationType === "POP" && shouldPersist && typeof savedY === "number") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    prevKeyRef.current = key;
    prevPersistRef.current = shouldPersist;
  }, [key, pathname, navigationType]);

  return null;
}
