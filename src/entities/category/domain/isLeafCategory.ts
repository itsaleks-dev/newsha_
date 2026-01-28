import type { Category } from "@/entities/category/types";

export function isLeafCategory(categoryId: string, categories: Category[]): boolean {
  return !categories.some((c) => c.parentId === categoryId);
}
