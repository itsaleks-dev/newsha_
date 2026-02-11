import { FieldInput } from "@/shared/ui/Form/ui/FieldInput";

import { CARD_FORM_TEXT } from "./config";
import * as S from "./PaymentSection.styled";

export function CardForm() {
  return (
    <S.CardForm>
      <FieldInput name="payment.card.number" placeholder={CARD_FORM_TEXT.NUMBER.PLACEHOLDER} />

      <S.CardRow>
        <FieldInput name="payment.card.expiry" placeholder={CARD_FORM_TEXT.EXPIRY.PLACEHOLDER} />

        <FieldInput
          name="payment.card.cvc"
          placeholder={CARD_FORM_TEXT.CVC.PLACEHOLDER}
          type="password"
        />
      </S.CardRow>

      <S.PayButton type="submit">{CARD_FORM_TEXT.PAY_BUTTON}</S.PayButton>
    </S.CardForm>
  );
}
