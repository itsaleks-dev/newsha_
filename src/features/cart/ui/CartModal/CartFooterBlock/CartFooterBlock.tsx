import { formatPrice } from "@/shared/lib/formatPrice";

import {
  CartFooter,
  FooterLeft,
  FooterRight,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  CheckoutButton,
  ClearCartButton,
} from "./CartFooterBlock.styled";

import { CART_FOOTER_TEXT } from "./config";

type CartFooterBlockProps = {
  totalPrice: number;
  clear: () => void;
  checkout: () => void;
};

export function CartFooterBlock({ totalPrice, clear, checkout }: CartFooterBlockProps) {
  return (
    <CartFooter>
      <FooterLeft>
        <ClearCartButton onClick={clear}>{CART_FOOTER_TEXT.CLEAR}</ClearCartButton>
      </FooterLeft>

      <FooterRight>
        <SummaryRow>
          <SummaryLabel>{CART_FOOTER_TEXT.TOTAL_LABEL}</SummaryLabel>
          <SummaryValue>{formatPrice(totalPrice)}</SummaryValue>
        </SummaryRow>

        <CheckoutButton onClick={checkout}>{CART_FOOTER_TEXT.CHECKOUT}</CheckoutButton>
      </FooterRight>
    </CartFooter>
  );
}
