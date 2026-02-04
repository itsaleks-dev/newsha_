import { useRef, useState } from "react";

import type { ProductPreview, ProductVolumeOption } from "@/entities/product/types";

import { useWishlist } from "@/features/wishlist/hooks";

import { ProductCardView } from "./ProductCard.view";

type Props = {
  product: ProductPreview;
};

export function ProductCardContainer({ product }: Props) {
  const [selectedValue, setSelectedValue] = useState<ProductVolumeOption["value"] | null>(
    product.volumes?.[0]?.value ?? null,
  );

  const [qty, setQty] = useState(1);
  const qtyRef = useRef<HTMLSpanElement>(null);

  const { toggle, isInWishlist } = useWishlist();

  const image =
    product.volumes?.find((v) => v.value === selectedValue)?.image ??
    product.image ??
    product.volumes?.[0]?.image ??
    "/images/placeholder-product.jpg";

  return (
    <ProductCardView
      product={product}
      image={image}
      volumes={product.volumes ?? []}
      selectedValue={selectedValue}
      qty={qty}
      qtyRef={qtyRef}
      isWishlisted={isInWishlist(product.id)}
      onToggleWishlist={() => toggle(product.id)}
      onSelectVolume={setSelectedValue}
      onDecrease={() => setQty((v) => Math.max(1, v - 1))}
      onIncrease={() => setQty((v) => v + 1)}
    />
  );
}
