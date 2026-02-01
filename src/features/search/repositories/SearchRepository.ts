import type { SearchParams, SearchResult } from "@/features/search/entities";

export interface SearchRepository {
  search(params: SearchParams): Promise<SearchResult[]>;
}
