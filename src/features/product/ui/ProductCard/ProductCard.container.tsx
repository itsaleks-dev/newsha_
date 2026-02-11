import { useCallback, useMemo, useRef, useState } from "react";

import { useAppDispatch } from "@/app/store/hooks";

import type { ProductPreview, ProductVolumeOption } from "@/entities/product/types";

import { useWishlist } from "@/features/wishlist/hooks";
import { addToCart } from "@/features/cart/model";

import { ProductCardView } from "./ProductCard.view";

type Props = {
  product: ProductPreview;
};

export function ProductCardContainer({ product }: Props) {
  const dispatch = useAppDispatch();

  const [selectedValue, setSelectedValue] = useState<ProductVolumeOption["value"] | null>(
    product.volumes?.[0]?.value ?? null,
  );

  const [qty, setQty] = useState(1);
  const qtyRef = useRef<HTMLSpanElement>(null);

  const { toggle, isInWishlist } = useWishlist();

  const volumes = useMemo(() => product.volumes ?? [], [product.volumes]);

  const selectedOption = useMemo(
    () => volumes.find((v) => v.value === selectedValue) ?? null,
    [volumes, selectedValue],
  );

  const image = useMemo(
    () =>
      selectedOption?.image ??
      product.image ??
      volumes[0]?.image ??
      "/images/placeholder-product.jpg",
    [selectedOption, product.image, volumes],
  );

  const handleAddToCart = useCallback(() => {
    if (volumes.length > 0 && !selectedOption) return;

    dispatch(
      addToCart({
        productId: product.id,
        categoryId: product.categoryId,
        volume: selectedOption?.value ?? null,
        qty,
      }),
    );
  }, [dispatch, product.id, product.categoryId, selectedOption, qty, volumes.length]);

  return (
    <ProductCardView
      product={product}
      image={image}
      volumes={volumes}
      selectedValue={selectedValue}
      qty={qty}
      qtyRef={qtyRef}
      isWishlisted={isInWishlist(product.id)}
      onToggleWishlist={() => toggle(product.id)}
      onSelectVolume={setSelectedValue}
      onDecrease={() => setQty((v) => Math.max(1, v - 1))}
      onIncrease={() => setQty((v) => v + 1)}
      onAddToCart={handleAddToCart}
    />
  );
}
