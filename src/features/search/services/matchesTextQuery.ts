import type { Product } from "@/entities/product/types";

import { normalizeSearchText } from "./normalizeSearchText";
import { cyrToLat } from "./cyrToLat";

export function matchesTextQuery(product: Product, rawQuery: string): boolean {
  if (!rawQuery.trim()) return false;

  const query = normalizeSearchText(rawQuery);
  const tokens = query.split(" ");

  const source = normalizeSearchText(
    [
      product.name,
      product.code,
      product.slug,
      product.shortDescription,
      product.description,
      ...(product.tags ?? []),
    ]
      .filter(Boolean)
      .join(" "),
  );

  const sourceLat = cyrToLat(source);

  return tokens.every((t) => source.includes(t) || sourceLat.includes(t));
}
