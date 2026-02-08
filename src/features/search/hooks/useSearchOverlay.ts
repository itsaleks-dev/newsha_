import { useCallback, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { closeSearch, selectIsSearchOpen } from "@/features/search/model";
import { SEARCH_CONFIG } from "@/features/search/config";

import { useSearchController } from "./useSearchController";

const { CLOSE_ANIMATION_DELAY } = SEARCH_CONFIG;

export function useSearchOverlay() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsSearchOpen);

  const search = useSearchController();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);

    setTimeout(() => {
      dispatch(closeSearch());
      setIsClosing(false);
    }, CLOSE_ANIMATION_DELAY);
  }, [dispatch]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  return {
    ...search,
    isOpen,
    isClosing,
    handleClose,
  };
}
