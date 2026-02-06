import type { ProductPreview } from "@/entities/product/types";

import { useWishlist } from "@/features/wishlist/hooks";

import { ProductCardBestsellerView } from "./ProductCardBestseller.view";

type Props = {
  product: ProductPreview;
};

export function ProductCardBestsellerContainer({ product }: Props) {
  const { toggle, isInWishlist } = useWishlist();

  const image = product.image ?? "/images/placeholder-product.jpg";

  const handleAddToCart = () => {
    console.log("add to cart", product.id);
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
    />
  );
}
