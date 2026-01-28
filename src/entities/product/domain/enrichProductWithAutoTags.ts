import type { Product } from "@/entities/product/types/product.types";
import { NEEDS_KEYWORDS, CONDITION_KEYWORDS } from "@/entities/product/config";

import { normalizeText } from "./normalizeText";
import { matchesKeyword } from "./matchesKeyword";

export function enrichProductWithAutoTags(product: Product): Product {
  const combinedText = normalizeText(
    [...(product.tags ?? []), product.shortDescription ?? "", product.description ?? ""].join(" "),
  );

  type NeedTag = (typeof NEEDS_KEYWORDS)[keyof typeof NEEDS_KEYWORDS];
  type ConditionTag = (typeof CONDITION_KEYWORDS)[keyof typeof CONDITION_KEYWORDS];

  const needs = new Set<NeedTag>();
  const conditions = new Set<ConditionTag>();

  for (const [keyword, categoryId] of Object.entries(NEEDS_KEYWORDS)) {
    if (matchesKeyword(combinedText, keyword)) needs.add(categoryId);
  }

  for (const [keyword, categoryId] of Object.entries(CONDITION_KEYWORDS)) {
    if (matchesKeyword(combinedText, keyword)) conditions.add(categoryId);
  }

  return {
    ...product,
    needs: product.needs?.length ? product.needs : Array.from(needs),
    condition: product.condition?.length ? product.condition : Array.from(conditions),
  };
}
