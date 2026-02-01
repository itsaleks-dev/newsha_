import type { Product } from "@/entities/product/types";

import { LocalSearchRepository } from "@/features/search/repositories";
import { createSearchProductsUseCase } from "@/features/search/useCases";
import type { SearchParams, SearchResult } from "@/features/search/entities";

export function createSearchService(getProducts: () => Product[]) {
  const repository = new LocalSearchRepository(getProducts);
  const searchUseCase = createSearchProductsUseCase(repository);

  return {
    search: (params: SearchParams): Promise<SearchResult[]> => searchUseCase(params),
  };
}
