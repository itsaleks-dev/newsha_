import type { ID, Slug, Money, Quantity, Subtotal } from "@/shared/types/primitives";
import type { ProductPreview, ProductVolumeOption } from "@/entities/product/types/product.types";

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
