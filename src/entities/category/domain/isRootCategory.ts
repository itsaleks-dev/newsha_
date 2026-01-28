import type { Category } from "@/entities/category/types";

export function isRootCategory(category: Category): boolean {
  return category.parentId === null;
}
