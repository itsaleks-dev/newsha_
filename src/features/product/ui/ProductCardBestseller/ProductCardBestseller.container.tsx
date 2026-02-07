import type { ProductPreview } from "@/entities/product/types";

import { useWishlist } from "@/features/wishlist/hooks";
import { useAddToCartUndo } from "@/features/cart/hooks/useAddToCartUndo";

import { ProductCardBestsellerView } from "./ProductCardBestseller.view";

type Props = {
  product: ProductPreview;
};

export function ProductCardBestsellerContainer({ product }: Props) {
  const { toggle, isInWishlist } = useWishlist();

  const image = product.image ?? "/images/placeholder-product.jpg";

  const { state, start, cancel } = useAddToCartUndo(
    {
      productId: product.id,
      categoryId: product.categoryId,
      volume: null,
    },
    {
      timeoutMs: 4_000,
    },
  );

  const handleAddToCart = () => {
    if (state === "pending") {
      cancel();
    } else {
      start();
    }
  };

  return (
    <ProductCardBestsellerView
      product={{
        ...product,
        isBestseller: true,
      }}
      image={image}
      isWishlisted={isInWishlist(product.id)}
      onToggleWishlist={() => toggle(product.id)}
      onAddToCart={handleAddToCart}
      addToCartState={state}
    />
  );
}
