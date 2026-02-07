import type { ProductPreview } from "@/entities/product/types";

import { PRODUCT_CARD_TEXT } from "@/features/product/ui/ProductCard/config";

import { ROUTES } from "@/shared/config";
import { icons } from "@/shared/theme/variables";
import { formatPrice } from "@/shared/lib/formatPrice";

import * as S from "./ProductCardBestseller.styled";

type Props = {
  product: ProductPreview;
  image: string;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onAddToCart: () => void;

  addToCartState: "idle" | "pending";
};

export function ProductCardBestsellerView({
  product,
  image,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  addToCartState,
}: Props) {
  return (
    <S.CardLink to={ROUTES.PRODUCT(product.slug)}>
      <S.Card>
        <S.CardOverlay>
          <S.BadgeStack>
            <S.Badge>{PRODUCT_CARD_TEXT.BADGE_BESTSELLER}</S.Badge>
          </S.BadgeStack>

          <S.WishlistBtn
            $active={isWishlisted}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleWishlist();
            }}
          >
            <img src={icons.user.wishlist} alt="Wishlist" />
          </S.WishlistBtn>
        </S.CardOverlay>

        <S.ImageWrap>
          <S.Image src={image} alt={product.nameEn} />
        </S.ImageWrap>

        <S.Bottom>
          <S.BottomContent>
            <S.Title>
              <span className="en">{product.nameEn}</span>
              <span className="ua">{product.nameUa}</span>
            </S.Title>

            <S.Price>{formatPrice(product.price)}</S.Price>
          </S.BottomContent>

          <S.BuyBtn
            $pending={addToCartState === "pending"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart();
            }}
          >
            <span>
              {addToCartState === "pending"
                ? PRODUCT_CARD_TEXT.CANCEL
                : PRODUCT_CARD_TEXT.ADD_TO_CART}
            </span>
          </S.BuyBtn>
        </S.Bottom>
      </S.Card>
    </S.CardLink>
  );
}
