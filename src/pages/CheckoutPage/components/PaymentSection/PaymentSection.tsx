import { useFormikContext } from "formik";

import { PAYMENT_METHOD } from "@/entities/order/types";
import type { PaymentMethod } from "@/entities/order/types";

import { PaymentCard } from "./PaymentCard";
import { CardForm } from "./CardForm";

import { PAYMENT_SECTION_TEXT } from "./config";
import * as S from "./PaymentSection.styled";

type CheckoutFormValues = {
  payment: {
    method: PaymentMethod;
    card?: {
      number: string;
      expiry: string;
      cvc: string;
    };
  };
};

export function PaymentSection() {
  const { values, setFieldValue } = useFormikContext<CheckoutFormValues>();

  const method = values.payment?.method ?? PAYMENT_METHOD.CashOnDelivery;

  const selectMethod = (next: PaymentMethod) => {
    setFieldValue("payment.method", next);

    if (next === PAYMENT_METHOD.CashOnDelivery) {
      setFieldValue("payment.card", undefined);
    }
  };

  return (
    <S.Section>
      <S.Title>{PAYMENT_SECTION_TEXT.TITLE}</S.Title>

      <S.Cards>
        <PaymentCard
          title={PAYMENT_SECTION_TEXT.METHODS.COD.TITLE}
          description={PAYMENT_SECTION_TEXT.METHODS.COD.DESCRIPTION}
          active={method === PAYMENT_METHOD.CashOnDelivery}
          onClick={() => selectMethod(PAYMENT_METHOD.CashOnDelivery)}
        />

        <PaymentCard
          title={PAYMENT_SECTION_TEXT.METHODS.CARD.TITLE}
          description={PAYMENT_SECTION_TEXT.METHODS.CARD.DESCRIPTION}
          active={method === PAYMENT_METHOD.Online}
          onClick={() => selectMethod(PAYMENT_METHOD.Online)}
        />
      </S.Cards>

      {method === PAYMENT_METHOD.Online && <CardForm />}
    </S.Section>
  );
}
