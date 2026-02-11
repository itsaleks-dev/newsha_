import type { ProductPreview, ProductVolumeOption } from "@/entities/product/types";

import type { ID, Slug, Money, Quantity, Subtotal } from "@/shared/types";

export type CartViewItem = {
  id: ID;
  slug: Slug;
  name: string;
  image: string;
  volumeValue: ProductVolumeOption["value"];
  price: Money;
  oldPrice: Money | null;
  qty: Quantity;
};

export type CartViewItemDetailed = {
  item: CartViewItem;
  product: ProductPreview;
  volume?: ProductVolumeOption;
  unitPrice: Money;
  totalPrice: Subtotal;
};
