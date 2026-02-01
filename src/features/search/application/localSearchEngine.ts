import type { Product } from "@/entities/product/types";

import type { SearchResult, SearchParams } from "@/features/search/entities";
import { matchesTextQuery } from "@/features/search/services";

export async function localSearchEngine(
  products: Product[] | undefined | null,
  { query, limit = 10 }: SearchParams,
): Promise<SearchResult[]> {
  if (!Array.isArray(products)) return [];

  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResult[] = [];

  for (const p of products) {
    if (!matchesTextQuery(p, q)) continue;

    for (const v of p.volumes ?? []) {
      results.push({
        id: `${p.id}-${v.value}`,
        productId: p.id,
        name: p.name,
        slug: p.slug,
        image:
          p.gallery.find((g) => g.type === "image" && g.isPrimary)?.url ??
          p.gallery.find((g) => g.type === "image")?.url ??
          "",
        volume: v,
        price: v.price,
        isInStock: v.inStock,
        ...(v.oldPrice !== undefined ? { oldPrice: v.oldPrice } : {}),
      });
    }
  }

  return limit ? results.slice(0, limit) : results;
}
