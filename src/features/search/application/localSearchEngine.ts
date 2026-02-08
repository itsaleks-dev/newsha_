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

  for (const product of products) {
    if (!matchesTextQuery(product, q)) continue;

    const image =
      product.gallery.find((g) => g.type === "image" && g.isPrimary)?.url ??
      product.gallery.find((g) => g.type === "image")?.url ??
      "";

    for (const volume of product.volumes ?? []) {
      results.push({
        id: `${product.id}-${volume.value}`,
        productId: product.id,
        slug: product.slug,
        nameEn: product.nameEn,
        nameUa: product.nameUa,
        image,
        volume,
        price: volume.price,
        isInStock: volume.inStock,

        ...(volume.oldPrice !== undefined ? { oldPrice: volume.oldPrice } : {}),
      });
    }
  }

  return limit ? results.slice(0, limit) : results;
}
