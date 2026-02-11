import { Formik, Form } from "formik";

import { DELIVERY_METHOD, PAYMENT_METHOD } from "@/entities/order/types";
import type { CheckoutFormValues } from "@/entities/order/types";

import { useCheckoutSubmit } from "@/features/cart/hooks";

import { ContactSection } from "@/pages/CheckoutPage/components/ContactSection";
import { DeliverySection } from "@/pages/CheckoutPage/components/DeliverySection";
import { PaymentSection } from "@/pages/CheckoutPage/components/PaymentSection";

import * as S from "./CheckoutPage.styled";

export function CheckoutPage() {
  const { submit } = useCheckoutSubmit();

  return (
    <Formik<CheckoutFormValues>
      initialValues={{
        name: "",
        email: "",
        phone: "",

        delivery: {
          method: DELIVERY_METHOD.Warehouse,
          city: "",
          warehouse: "",
          address: "",
        },

        payment: {
          method: PAYMENT_METHOD.CashOnDelivery,
        },
      }}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <ContactSection />
          <DeliverySection />
          <PaymentSection />

          <S.SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Оплата..." : "Підтвердити замовлення"}
          </S.SubmitButton>
        </Form>
      )}
    </Formik>
  );
}

export default CheckoutPage;
