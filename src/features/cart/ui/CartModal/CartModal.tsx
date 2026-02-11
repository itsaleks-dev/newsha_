import { MouseEvent } from "react";

import { CartHeaderBlock } from "@/features/cart/ui/CartModal/CartHeaderBlock";
import { CartListBlock } from "@/features/cart/ui/CartModal/CartListBlock";
import { CartFooterBlock } from "@/features/cart/ui/CartModal/CartFooterBlock";
import { useCartModalController } from "@/features/cart/hooks";

import * as S from "./CartModal.styled";

export function CartModal() {
  const { open, items, totalQty, totalPrice, increase, decrease, remove, clear, close, checkout } =
    useCartModalController();

  if (!open) return null;

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      <S.CartOverlay onClick={close} />

      <S.CartPanel onClick={stop}>
        <CartHeaderBlock totalQty={totalQty} hasItems={items.length > 0} onClose={close} />

        <S.CartBody>
          <CartListBlock items={items} increase={increase} decrease={decrease} remove={remove} />
        </S.CartBody>

        {items.length > 0 && (
          <CartFooterBlock totalPrice={totalPrice} clear={clear} checkout={checkout} />
        )}
      </S.CartPanel>
    </>
  );
}
