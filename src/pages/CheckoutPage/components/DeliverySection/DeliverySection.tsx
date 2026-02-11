import { useFormikContext } from "formik";

import type { CheckoutFormValues } from "@/entities/order/types";
import { DELIVERY_METHOD } from "@/entities/order/types";

import { DELIVERY_SECTION_TEXT } from "./config";
import * as S from "./DeliverySection.styled";

export function DeliverySection() {
  const { values, setFieldValue } = useFormikContext<CheckoutFormValues>();

  const method = values.delivery.method;

  return (
    <S.Section>
      <S.Title>{DELIVERY_SECTION_TEXT.TITLE}</S.Title>

      <S.Methods>
        <S.MethodButton
          type="button"
          $active={method === DELIVERY_METHOD.Warehouse}
          onClick={() => setFieldValue("delivery.method", DELIVERY_METHOD.Warehouse)}
        >
          {DELIVERY_SECTION_TEXT.METHODS.WAREHOUSE}
        </S.MethodButton>

        <S.MethodButton
          type="button"
          $active={method === DELIVERY_METHOD.Courier}
          onClick={() => setFieldValue("delivery.method", DELIVERY_METHOD.Courier)}
        >
          {DELIVERY_SECTION_TEXT.METHODS.COURIER}
        </S.MethodButton>
      </S.Methods>

      <S.Field>
        <label>{DELIVERY_SECTION_TEXT.CITY.LABEL}</label>
        <input
          value={values.delivery.city}
          onChange={(e) => setFieldValue("delivery.city", e.target.value)}
          placeholder={DELIVERY_SECTION_TEXT.CITY.PLACEHOLDER}
        />
      </S.Field>

      {method === DELIVERY_METHOD.Warehouse && (
        <S.Field>
          <label>{DELIVERY_SECTION_TEXT.WAREHOUSE.LABEL}</label>
          <input
            value={values.delivery.warehouse ?? ""}
            onChange={(e) => setFieldValue("delivery.warehouse", e.target.value)}
            placeholder={DELIVERY_SECTION_TEXT.WAREHOUSE.PLACEHOLDER}
          />
        </S.Field>
      )}

      {method === DELIVERY_METHOD.Courier && (
        <S.Field>
          <label>{DELIVERY_SECTION_TEXT.ADDRESS.LABEL}</label>
          <input
            value={values.delivery.address ?? ""}
            onChange={(e) => setFieldValue("delivery.address", e.target.value)}
            placeholder={DELIVERY_SECTION_TEXT.ADDRESS.PLACEHOLDER}
          />
        </S.Field>
      )}
    </S.Section>
  );
}
