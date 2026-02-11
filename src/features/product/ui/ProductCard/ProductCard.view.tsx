import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import type { ProductPreview, ProductVolumeOption } from "@/entities/product/types";

import { VolumeSelectorList } from "@/features/product/ui/VolumeSelectorList";

import { ROUTES } from "@/shared/config";
import { icons } from "@/shared/theme/variables";
import { formatPrice } from "@/shared/lib/formatPrice";
import { QuantityControl } from "@/shared/ui/QuantityControl";
import { RatingStars } from "@/shared/ui/RatingStars";

import { PRODUCT_CARD_TEXT } from "./config";

import * as S from "./ProductCard.styled";

type Props = {
  product: ProductPreview;
  image: string;
  volumes: readonly ProductVolumeOption[];
  selectedValue: ProductVolumeOption["value"] | null;
  qty: number;
  qtyRef: React.RefObject<HTMLSpanElement | null>;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onSelectVolume: (v: ProductVolumeOption["value"]) => void;
  onDecrease: () => void;
  onIncrease: () => void;
  onAddToCart: () => void;
};

export function ProductCardView({
  product,
  image,
  volumes,
  selectedValue,
  qty,
  qtyRef,
  isWishlisted,
  onToggleWishlist,
  onSelectVolume,
  onDecrease,
  onIncrease,
  onAddToCart,
}: Props) {
  const selectedVolume = volumes.find((v) => v.value === selectedValue);
  const unitPrice = selectedVolume?.price ?? product.price;
  const totalPrice = unitPrice * qty;

  const [prevImage, setPrevImage] = useState(image);

  useEffect(() => {
    if (image !== prevImage) setPrevImage(image);
  }, [image, prevImage]);

  return (
    <S.Card as={Link} to={ROUTES.PRODUCT(product.slug)}>
      <S.CardOverlay>
        <S.BadgeStack>
          {product.isNew && <S.Badge $variant="new">{PRODUCT_CARD_TEXT.BADGE_NEW}</S.Badge>}
          {product.isBestseller && (
            <S.Badge $variant="bestseller">{PRODUCT_CARD_TEXT.BADGE_BESTSELLER}</S.Badge>
          )}
        </S.BadgeStack>

        <S.WishlistBtn
          $active={isWishlisted}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleWishlist();
          }}
        >
          S.
          <img src={icons.user.wishlist} alt="Wishlist" />
        </S.WishlistBtn>
      </S.CardOverlay>

      <S.ImageWrap>
        <S.Image src={prevImage} $active={false} />
        <S.Image src={image} $active />
      </S.ImageWrap>

      {volumes.length > 0 && (
        <S.VolumeFloating
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <VolumeSelectorList
            volumes={volumes}
            selected={selectedValue}
            onSelect={onSelectVolume}
          />
        </S.VolumeFloating>
      )}

      <S.Bottom>
        <S.BottomContent>
          <S.Title>
            <span className="en">{product.nameEn}</span>
            <span className="ua">{product.nameUa}</span>
          </S.Title>

          <S.RatingPriceRow>
            <div className="rating">
              <RatingStars rating={product.rating ?? 0} reviews={product.reviewCount ?? 0} />
            </div>
            <S.Price>{formatPrice(totalPrice)}</S.Price>
          </S.RatingPriceRow>
        </S.BottomContent>

        <S.BuyRow>
          <S.BuyBtn
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart();
            }}
          >
            {PRODUCT_CARD_TEXT.BUY}
          </S.BuyBtn>

          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <QuantityControl
              key={selectedValue}
              value={qty}
              valueRef={qtyRef}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
            />
          </div>
        </S.BuyRow>
      </S.Bottom>
    </S.Card>
  );
}
