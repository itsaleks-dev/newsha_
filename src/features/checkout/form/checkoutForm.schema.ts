import type { FormSchema } from "@/shared/ui/Form/schema";

import { CHECKOUT_FORM_TEXT as M } from "@/features/checkout/config";

export const checkoutForm: FormSchema = {
  title: M.TITLE,
  submitLabel: M.SUBMIT,

  fields: [
    { name: "firstName", label: M.FIELDS.FIRST_NAME, type: "text", required: true },
    { name: "lastName", label: M.FIELDS.LAST_NAME, type: "text", required: true },
    { name: "middleName", label: M.FIELDS.MIDDLE_NAME, type: "text" },

    {
      name: "phone",
      label: M.FIELDS.PHONE.LABEL,
      type: "phone",
      required: true,
      placeholder: M.FIELDS.PHONE.PLACEHOLDER,
      pattern: {
        value: /^\+380\d{9}$/,
        message: M.FIELDS.PHONE.ERROR,
      },
    },

    {
      name: "deliveryMethod",
      label: M.FIELDS.DELIVERY_METHOD.LABEL,
      type: "select",
      required: true,
      options: [
        { value: "warehouse", label: M.FIELDS.DELIVERY_METHOD.OPTIONS.WAREHOUSE },
        { value: "postomat", label: M.FIELDS.DELIVERY_METHOD.OPTIONS.POSTOMAT },
        { value: "courier", label: M.FIELDS.DELIVERY_METHOD.OPTIONS.COURIER },
      ],
    },

    { name: "city", label: M.FIELDS.CITY.LABEL, type: "text", required: true },
    { name: "warehouse", label: M.FIELDS.WAREHOUSE.LABEL, type: "text" },
    { name: "postomat", label: M.FIELDS.POSTOMAT.LABEL, type: "text" },
    { name: "address", label: M.FIELDS.ADDRESS.LABEL, type: "text" },
    { name: "comment", label: M.FIELDS.COMMENT.LABEL, type: "textarea", maxLength: 500 },
  ],
};
