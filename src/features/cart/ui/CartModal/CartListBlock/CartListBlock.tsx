import type { CartViewItemDetailed } from "@/features/cart/view";

import { CartRowBlock } from "@/features/cart/ui/CartModal/CartRowBlock";

import { CART_EMPTY_TEXT } from "./config";
import { CartList, CartEmptyState } from "./CartListBlock.styled";

type CartListBlockProps = {
  items: CartViewItemDetailed[];
  increase: (item: CartViewItemDetailed) => void;
  decrease: (item: CartViewItemDetailed) => void;
  remove: (item: CartViewItemDetailed) => void;
};

export function CartListBlock({ items, increase, decrease, remove }: CartListBlockProps) {
  if (items.length === 0) {
    return <CartEmptyState>{CART_EMPTY_TEXT.MESSAGE}</CartEmptyState>;
  }

  return (
    <CartList>
      {items.map((row) => (
        <CartRowBlock
          key={`${row.item.id}-${row.item.volumeValue}`}
          row={row}
          increase={increase}
          decrease={decrease}
          remove={remove}
        />
      ))}
    </CartList>
  );
}
