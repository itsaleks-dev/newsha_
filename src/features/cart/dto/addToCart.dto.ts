import type { ID } from "@/shared/types/primitives";
import type { ProductVolume } from "@/entities/product/types";

export interface AddToCartDTO {
  productId: ID;
  categoryId: ID;
  volume: ProductVolume | null;
  qty: number;
}
