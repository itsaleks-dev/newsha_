import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { analyticsApi } from "@/app/analytics/core";

import { PAYMENT_METHOD, type CheckoutFormValues } from "@/entities/order/types";

import { selectCartTotal, clearCart } from "@/features/cart/model";

export function useCheckoutSubmit() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const total = useAppSelector(selectCartTotal);

  const submit = useCallback(
    async (values: CheckoutFormValues) => {
      if (values.payment.method === PAYMENT_METHOD.Online) {
        await new Promise((res) => setTimeout(res, 1200));
      }

      const orderId = crypto.randomUUID();

      analyticsApi.purchase({
        orderId,
        total,
      });

      dispatch(clearCart());

      navigate(`/checkout/success?order=${orderId}`);
    },
    [dispatch, navigate, total],
  );

  return { submit };
}
