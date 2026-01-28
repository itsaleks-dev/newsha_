import type { Category } from "@/entities/category/types";
import type { CatalogCategorySlug } from "@/entities/category/config";

const CATALOG_SLUGS = new Set<CatalogCategorySlug>([
  "shampoo-cleansing",
  "conditioners",
  "masks-treatment",
  "leave-in-care",
  "oils",
  "heat-protection",
  "medical-line",
  "styling",
  "color-masks",
  "travel-size",
  "body-care",
  "for-men",
  "tools-accessories",
  "gifts",
]);

export function getCatalogCategories(categories: Category[]): Category[] {
  return categories
    .filter((category) => CATALOG_SLUGS.has(category.slug as CatalogCategorySlug))
    .sort((a, b) => a.order - b.order);
}
