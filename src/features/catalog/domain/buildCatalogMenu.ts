import type { Category } from "@/entities/category/types";

import { CATALOG_SLUGS } from "./catalogSlugs";

export function buildCatalogMenu(categories: readonly Category[]) {
  return categories
    .filter((c) => CATALOG_SLUGS.has(c.slug))
    .sort((a, b) => a.order - b.order)
    .map((c) => ({
      slug: c.slug,
      name: c.name,
    }));
}
