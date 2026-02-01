import type { ProductFilters } from "./filters.schema";

export function parseProductFilters(params: URLSearchParams): ProductFilters {
  const filters: ProductFilters = {};

  const category = params.get("category");
  if (category) filters.category = category;

  const needs = params.get("needs");
  if (needs) filters.needs = needs;

  const condition = params.get("condition");
  if (condition) filters.condition = condition;

  return filters;
}
