import type { Category } from "@/entities/category/types";
import type { Slug, ID } from "@/entities/primitives";

const SLUG_ALREADY_EXISTS_MESSAGE = "Slug вже використовується";

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
