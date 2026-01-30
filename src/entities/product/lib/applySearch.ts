import type { Product } from "@/entities/product/types";

export function applySearch(products: readonly Product[], search?: string): Product[] {
  const q = search?.trim().toLowerCase();
  if (!q) return products.filter((p) => p.isActive);

  return products.filter((p) => {
    if (!p.isActive) return false;

    const name = p.name.toLowerCase();
    const code = p.code.toLowerCase();
    const desc = p.shortDescription?.toLowerCase() ?? "";

    return name.includes(q) || code.includes(q) || desc.includes(q);
  });
}
