import type { ProductVolumeOption } from "@/entities/product/types/product.types";

import type { ID, Money, Quantity, Subtotal } from "@/shared/types";

export type CartItem = {
  id: ID;
  variant: Pick<ProductVolumeOption, "value" | "label" | "unit" | "price" | "oldPrice">;
  price: Money;
  oldPrice?: Money;
  qty: Quantity;
  subtotal: Subtotal;
};

export type CartRow = {
  productId: ID;
  volumeValue: ProductVolumeOption["value"];
  qty: Quantity;
  price: Money;
  oldPrice?: Money;
};

export type CartOwnerId = ID | "guest";
