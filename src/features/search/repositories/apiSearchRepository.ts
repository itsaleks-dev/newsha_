import type { SearchParams, SearchResult } from "@/features/search/entities";
import type { SearchRepository } from "./SearchRepository";

export class ApiSearchRepository implements SearchRepository {
  constructor(private readonly baseUrl: string = "/api") {}

  async search({ query, limit = 10 }: SearchParams): Promise<SearchResult[]> {
    const q = query.trim();
    if (!q) return [];

    const params = new URLSearchParams({
      q,
      limit: String(limit),
    });

    const res = await fetch(`${this.baseUrl}/search?${params.toString()}`);
    if (!res.ok) {
      throw new Error("Search request failed");
    }

    return res.json();
  }
}
