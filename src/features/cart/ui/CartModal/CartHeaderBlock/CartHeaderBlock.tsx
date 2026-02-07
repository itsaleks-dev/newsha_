import { CartHeaderRow, CartTitle, CartSubtitle, CloseButton } from "./CartHeaderBlock.styled";

import { CART_HEADER_TEXT } from "./config";

type CartHeaderProps = {
  totalQty: number;
  hasItems: boolean;
  onClose: () => void;
};

export function CartHeaderBlock({ totalQty, hasItems, onClose }: CartHeaderProps) {
  return (
    <CartHeaderRow>
      <div>
        <CartTitle>{CART_HEADER_TEXT.TITLE}</CartTitle>

        {hasItems && (
          <CartSubtitle>
            {totalQty}{" "}
            {totalQty === 1 ? CART_HEADER_TEXT.ITEM_FORMS.ONE : CART_HEADER_TEXT.ITEM_FORMS.MANY}
          </CartSubtitle>
        )}
      </div>

      <CloseButton onClick={onClose}>✕</CloseButton>
    </CartHeaderRow>
  );
}
