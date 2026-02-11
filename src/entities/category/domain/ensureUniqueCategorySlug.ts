import type { Category } from "@/entities/category/types";
import { SLUG_ALREADY_EXISTS_MESSAGE } from "@/entities/category/config";

import type { Slug, ID } from "@/shared/types";

export function ensureUniqueCategorySlug(
  slug: Slug,
  list: readonly Category[],
  excludeId?: ID,
): void {
  const exists = list.some((c) => c.slug === slug && c.id !== excludeId);

  if (exists) {
    throw new Error(SLUG_ALREADY_EXISTS_MESSAGE);
  }
}
