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

import {
  Card,
  ImageWrap,
  Image,
  CardOverlay,
  BadgeStack,
  Badge,
  WishlistBtn,
  Bottom,
  Title,
  Price,
  VolumeFloating,
  BuyBtn,
  RatingPriceRow,
  BuyRow,
  BottomContent,
} from "./ProductCard.styled";

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
}: Props) {
  const selectedVolume = volumes.find((v) => v.value === selectedValue);
  const unitPrice = selectedVolume?.price ?? product.price;
  const totalPrice = unitPrice * qty;

  const [prevImage, setPrevImage] = useState(image);

  useEffect(() => {
    if (image !== prevImage) setPrevImage(image);
  }, [image, prevImage]);

  return (
    <Card as={Link} to={ROUTES.PRODUCT(product.slug)}>
      <CardOverlay>
        <BadgeStack>
          {product.isNew && <Badge $variant="new">{PRODUCT_CARD_TEXT.BADGE_NEW}</Badge>}
          {product.isBestseller && (
            <Badge $variant="bestseller">{PRODUCT_CARD_TEXT.BADGE_BESTSELLER}</Badge>
          )}
        </BadgeStack>

        <WishlistBtn
          $active={isWishlisted}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleWishlist();
          }}
        >
          <img src={icons.user.wishlist} alt="Wishlist" />
        </WishlistBtn>
      </CardOverlay>

      <ImageWrap>
        <Image src={prevImage} $active={false} />
        <Image src={image} $active />
      </ImageWrap>

      {volumes.length > 0 && (
        <VolumeFloating
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
        </VolumeFloating>
      )}

      <Bottom>
        <BottomContent>
          <Title>
            <span className="en">{product.nameEn}</span>
            <span className="ua">{product.nameUa}</span>
          </Title>

          <RatingPriceRow>
            <div className="rating">
              <RatingStars rating={product.rating ?? 0} reviews={product.reviewCount ?? 0} />
            </div>
            <Price>{formatPrice(totalPrice)}</Price>
          </RatingPriceRow>
        </BottomContent>

        <BuyRow>
          <BuyBtn>{PRODUCT_CARD_TEXT.BUY}</BuyBtn>

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
        </BuyRow>
      </Bottom>
    </Card>
  );
}
