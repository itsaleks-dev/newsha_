import { MouseEvent } from "react";

import { CartHeaderBlock } from "@/features/cart/ui/CartModal/CartHeaderBlock";
import { CartListBlock } from "@/features/cart/ui/CartModal/CartListBlock";
import { CartFooterBlock } from "@/features/cart/ui/CartModal/CartFooterBlock";
import { useCartModalController } from "@/features/cart/hooks";

import { CartOverlay, CartPanel, CartBody } from "./CartModal.styled";

export function CartModal() {
  const { open, items, totalQty, totalPrice, increase, decrease, remove, clear, close, checkout } =
    useCartModalController();

  if (!open) return null;

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      <CartOverlay onClick={close} />

      <CartPanel onClick={stop}>
        <CartHeaderBlock totalQty={totalQty} hasItems={items.length > 0} onClose={close} />

        <CartBody>
          <CartListBlock items={items} increase={increase} decrease={decrease} remove={remove} />
        </CartBody>

        {items.length > 0 && (
          <CartFooterBlock totalPrice={totalPrice} clear={clear} checkout={checkout} />
        )}
      </CartPanel>
    </>
  );
}
