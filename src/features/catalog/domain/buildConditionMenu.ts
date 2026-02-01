import type { Category } from "@/entities/category/types";
import type { Slug } from "@/shared/types/primitives";

const CONDITION_ROOT_SLUG: Slug = "condition" as Slug;

export function buildConditionMenu(categories: readonly Category[]) {
  const root = categories.find((c) => c.slug === CONDITION_ROOT_SLUG);
  if (!root) return [];

  const groups = categories.filter((c) => c.parentId === root.id);

  return groups.map((group) => ({
    label: group.name,
    items: categories
      .filter((c) => c.parentId === group.id)
      .sort((a, b) => a.order - b.order)
      .map((c) => ({
        slug: c.slug,
        name: c.name,
      })),
  }));
}
