import type { ProductVolumeOption } from "@/entities/product/types";

export function generateVolumeLabel(
  value: ProductVolumeOption["value"],
  unit: NonNullable<ProductVolumeOption["unit"]> = "ml",
): string {
  return `${value} ${unit}`;
}
