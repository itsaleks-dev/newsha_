import type { CartViewItemDetailed } from "@/features/cart/view";

import { formatPrice } from "@/shared/lib/formatPrice";

import { CART_ROW_TEXT } from "./config";
import {
  CartRow,
  CartRowImage,
  CartRowInfo,
  CartRowTitle,
  CartRowMeta,
  CartRowQty,
  CartRowPrice,
  QtyButton,
  RemoveButton,
} from "./CartRowBlock.styled";

type CartRowBlockProps = {
  row: CartViewItemDetailed;
  increase: (item: CartViewItemDetailed) => void;
  decrease: (item: CartViewItemDetailed) => void;
  remove: (item: CartViewItemDetailed) => void;
};

export function CartRowBlock({ row, increase, decrease, remove }: CartRowBlockProps) {
  const { item, product, volume, unitPrice, totalPrice } = row;

  return (
    <CartRow>
      <CartRowImage>
        {product?.image && <img src={product.image} alt={product.name} />}
      </CartRowImage>

      <CartRowInfo>
        <CartRowTitle>{product?.name}</CartRowTitle>

        <CartRowMeta>
          {volume
            ? `${volume.label ?? `${volume.value} ${CART_ROW_TEXT.UNIT_ML}`}${CART_ROW_TEXT.META_SEPARATOR}${formatPrice(unitPrice)}`
            : formatPrice(unitPrice)}
        </CartRowMeta>
      </CartRowInfo>

      <CartRowQty>
        <QtyButton onClick={() => decrease(row)}>–</QtyButton>
        <span>{item.qty}</span>
        <QtyButton onClick={() => increase(row)}>+</QtyButton>
      </CartRowQty>

      <CartRowPrice>{formatPrice(totalPrice)}</CartRowPrice>

      <RemoveButton onClick={() => remove(row)}>{CART_ROW_TEXT.REMOVE}</RemoveButton>
    </CartRow>
  );
}
