import type { Product } from "../types";
import type { BreadcrumbProduct } from "@/app/navigation/types";

export function productToBreadcrumb(product?: Product): BreadcrumbProduct | undefined {
  if (!product) return;

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
  };
}
