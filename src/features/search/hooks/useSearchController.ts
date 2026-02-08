import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { SEARCH_CONFIG } from "@/features/search/config";

import { SEARCH_PLACEHOLDERS } from "@/features/search/ui/MobileSearch/config";
import {
  searchProducts,
  selectSearchQuery,
  selectSearchResults,
  selectSearchStatus,
  setSearchQuery,
} from "@/features/search/model";

import { useTypingPlaceholder } from "./useTypingPlaceholder";

const { LIMIT, MIN_CHARS, DEBOUNCE_DELAY } = SEARCH_CONFIG;

export function useSearchController() {
  const dispatch = useAppDispatch();

  const query = useAppSelector(selectSearchQuery);
  const results = useAppSelector(selectSearchResults);
  const status = useAppSelector(selectSearchStatus);
  const trimmedQuery = query.trim();
  const isValidQuery = trimmedQuery.length >= MIN_CHARS;
  const hasSearched = trimmedQuery.length >= MIN_CHARS;
  const typedPlaceholder = useTypingPlaceholder(SEARCH_PLACEHOLDERS, trimmedQuery.length === 0);

  const handleChange = useCallback(
    (value: string) => {
      dispatch(setSearchQuery(value));
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isValidQuery) return;

    const timer = setTimeout(() => {
      dispatch(searchProducts({ query: trimmedQuery, limit: LIMIT }));
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [trimmedQuery, isValidQuery, dispatch]);

  return {
    query,
    results,
    status,
    typedPlaceholder,
    hasSearched,
    handleChange,
    isValidQuery,
  };
}
