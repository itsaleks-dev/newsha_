import type { Product, ProductPreview } from "@/entities/product/types";

export function getFullProduct(products: Product[], preview: ProductPreview): Product | undefined {
  return products.find((p) => p.id === preview.id);
}
