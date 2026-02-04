import type { ProductPreview, ProductVolume } from "@/entities/product/types";

export type ProductCardViewProps = {
  product: ProductPreview;
  currentImage: string;
  totalPrice: number;
  canBuy: boolean;
  qty: number;
  selected: ProductVolume | null;
  productRating: number;
  productReviewsCount: number;
  isWishlisted: boolean;
  hideVolumes?: boolean;
  hideTags?: boolean;
  hideQuantity?: boolean;

  onToggleWishlist: () => void;
  onSelectVolume: (value: ProductVolume) => void;
  onDecrease: () => void;
  onIncrease: () => void;
  onBuy: (e: React.MouseEvent<HTMLButtonElement>) => void;

  imgRef: React.RefObject<HTMLImageElement | null>;
  qtyRef: React.RefObject<HTMLSpanElement | null>;
};

export type ProductCardContainerProps = {
  product: ProductPreview;
  hideVolumes?: boolean;
  hideTags?: boolean;
  hideQuantity?: boolean;
};
