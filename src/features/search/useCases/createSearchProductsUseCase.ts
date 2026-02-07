import { analyticsApi } from "@/app/analytics/core";

import type { SearchParams, SearchResult } from "@/features/search/entities";
import type { SearchRepository } from "@/features/search/repositories";
import { isMeaningfulSearch } from "@/features/search/application";

export type SearchProductsUseCase = (params: SearchParams) => Promise<SearchResult[]>;

export function createSearchProductsUseCase(repository: SearchRepository): SearchProductsUseCase {
  return async ({ query, limit = 20 }) => {
    const trimmed = query.trim().toLowerCase();

    if (!isMeaningfulSearch(trimmed)) return [];

    analyticsApi.search(trimmed);

    return repository.search({
      query: trimmed,
      limit,
    });
  };
}
