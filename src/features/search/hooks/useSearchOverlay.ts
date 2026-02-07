import { useCallback, useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { buildSmartPlaceholders } from "@/features/search/services";
import { selectFullProducts } from "@/features/product/model";
import { searchProducts } from "@/features/search/model";
import { SEARCH_CONFIG } from "@/features/search/config";
import {
  closeSearch,
  setSearchQuery,
  selectIsSearchOpen,
  selectSearchQuery,
  selectSearchResults,
  selectSearchStatus,
} from "@/features/search/model";

import { useTypingPlaceholder } from "./useTypingPlaceholder";

const { LIMIT, MIN_CHARS, CLOSE_ANIMATION_DELAY, DEBOUNCE_DELAY } = SEARCH_CONFIG;

export function useSearchOverlay() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsSearchOpen);
  const query = useAppSelector(selectSearchQuery);
  const results = useAppSelector(selectSearchResults);
  const status = useAppSelector(selectSearchStatus);

  const products = useAppSelector(selectFullProducts);

  const [isClosing, setIsClosing] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const placeholders = useMemo(() => buildSmartPlaceholders(products ?? []), [products]);
  const typedPlaceholder = useTypingPlaceholder(
    placeholders,
    isOpen && !isClosing && query.length === 0,
  );

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setHasSearched(false);
    setTimeout(() => {
      dispatch(closeSearch());
      setIsClosing(false);
    }, CLOSE_ANIMATION_DELAY);
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (!hasSearched && v.trim()) setHasSearched(true);
    dispatch(setSearchQuery(v));
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (!query.trim() || query.length < MIN_CHARS) return;

    const t = setTimeout(() => {
      dispatch(searchProducts({ query, limit: LIMIT }));
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(t);
  }, [query, dispatch]);

  return {
    isOpen,
    isClosing,
    query,
    results,
    status,
    typedPlaceholder,
    hasSearched,
    handleChange,
    handleClose,
  };
}
