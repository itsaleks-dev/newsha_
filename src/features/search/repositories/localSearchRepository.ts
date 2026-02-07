import type { Product } from "@/entities/product/types";

import type { SearchParams, SearchResult } from "@/features/search/entities";
import { localSearchEngine } from "@/features/search/application";

import type { SearchRepository } from "./SearchRepository";

export class LocalSearchRepository implements SearchRepository {
  constructor(private readonly getProducts: () => Product[]) {}

  search(params: SearchParams): Promise<SearchResult[]> {
    const products = this.getProducts();
    return localSearchEngine(products, params);
  }
}
