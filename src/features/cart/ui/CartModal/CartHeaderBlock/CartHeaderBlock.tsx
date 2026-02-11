import * as S from "./CartHeaderBlock.styled";

import { CART_HEADER_TEXT } from "./config";

type CartHeaderProps = {
  totalQty: number;
  hasItems: boolean;
  onClose: () => void;
};

export function CartHeaderBlock({ totalQty, hasItems, onClose }: CartHeaderProps) {
  return (
    <S.CartHeaderRow>
      <div>
        <S.CartTitle>{CART_HEADER_TEXT.TITLE}</S.CartTitle>

        {hasItems && (
          <S.CartSubtitle>
            {totalQty}{" "}
            {totalQty === 1 ? CART_HEADER_TEXT.ITEM_FORMS.ONE : CART_HEADER_TEXT.ITEM_FORMS.MANY}
          </S.CartSubtitle>
        )}
      </div>

      <S.CloseButton onClick={onClose}>✕</S.CloseButton>
    </S.CartHeaderRow>
  );
}
