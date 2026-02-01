import type { ProductPreview } from "@/entities/product/types";

export function getEffectiveProductPrice(p: ProductPreview): number {
  if (p.price) return p.price;

  if (p.volumes?.length) {
    return Math.min(...p.volumes.map((v) => v.price));
  }

  return 999999;
}
