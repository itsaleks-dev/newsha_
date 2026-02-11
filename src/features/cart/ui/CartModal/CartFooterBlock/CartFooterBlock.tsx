import { formatPrice } from "@/shared/lib/formatPrice";

import * as S from "./CartFooterBlock.styled";

import { CART_FOOTER_TEXT } from "./config";

type CartFooterBlockProps = {
  totalPrice: number;
  clear: () => void;
  checkout: () => void;
};

export function CartFooterBlock({ totalPrice, clear, checkout }: CartFooterBlockProps) {
  return (
    <S.CartFooter>
      <S.FooterLeft>
        <S.ClearCartButton onClick={clear}>{CART_FOOTER_TEXT.CLEAR}</S.ClearCartButton>
      </S.FooterLeft>

      <S.FooterRight>
        <S.SummaryRow>
          <S.SummaryLabel>{CART_FOOTER_TEXT.TOTAL_LABEL}</S.SummaryLabel>
          <S.SummaryValue>{formatPrice(totalPrice)}</S.SummaryValue>
        </S.SummaryRow>

        <S.CheckoutButton onClick={checkout}>{CART_FOOTER_TEXT.CHECKOUT}</S.CheckoutButton>
      </S.FooterRight>
    </S.CartFooter>
  );
}
