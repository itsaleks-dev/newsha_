import type { CartViewItemDetailed } from "@/features/cart/view";

import { formatPrice } from "@/shared/lib/formatPrice";

import { CART_ROW_TEXT } from "./config";
import * as S from "./CartRowBlock.styled";

type CartRowBlockProps = {
  row: CartViewItemDetailed;
  increase: (item: CartViewItemDetailed) => void;
  decrease: (item: CartViewItemDetailed) => void;
  remove: (item: CartViewItemDetailed) => void;
};

export function CartRowBlock({ row, increase, decrease, remove }: CartRowBlockProps) {
  const { item, product, volume, unitPrice, totalPrice } = row;

  return (
    <S.CartRow>
      <S.CartRowImage>
        {product?.image && <img src={product.image} alt={product.name} />}
      </S.CartRowImage>

      <S.CartRowInfo>
        <S.CartRowTitle>{product?.name}</S.CartRowTitle>

        <S.CartRowMeta>
          {volume
            ? `${volume.label ?? `${volume.value} ${CART_ROW_TEXT.UNIT_ML}`}${CART_ROW_TEXT.META_SEPARATOR}${formatPrice(unitPrice)}`
            : formatPrice(unitPrice)}
        </S.CartRowMeta>
      </S.CartRowInfo>

      <S.CartRowQty>
        <S.QtyButton onClick={() => decrease(row)}>–</S.QtyButton>
        <span>{item.qty}</span>
        <S.QtyButton onClick={() => increase(row)}>+</S.QtyButton>
      </S.CartRowQty>

      <S.CartRowPrice>{formatPrice(totalPrice)}</S.CartRowPrice>

      <S.RemoveButton onClick={() => remove(row)}>{CART_ROW_TEXT.REMOVE}</S.RemoveButton>
    </S.CartRow>
  );
}
