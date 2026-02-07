import type { BreadcrumbCategory } from "@/app/navigation/types";

import type { Category } from "@/entities/category/types";

export function categoryToBreadcrumb(category?: Category): BreadcrumbCategory | undefined {
  if (!category) return;

  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
  };
}
