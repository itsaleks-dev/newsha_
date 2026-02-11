import type { FormSchema, CooperationFormValues } from "@/shared/ui/Form/schema";

import { COOPERATION_TEXT } from "@/features/cooperation/config";

export const cooperationSchema: FormSchema<CooperationFormValues> = {
  submitLabel: COOPERATION_TEXT.submitLabel,
  validateBeforeSubmit: true,

  initialValues: {
    name: "",
    phone: "",
    city: "",
    message: "",
  },

  fields: [
    {
      name: "name",
      type: "text",
      placeholder: COOPERATION_TEXT.fields.name.placeholder,
      required: true,
      minLength: 2,
    },
    {
      name: "phone",
      type: "phone",
      placeholder: COOPERATION_TEXT.fields.phone.placeholder,
      required: true,
      pattern: {
        value: /^\+?[0-9]{9,14}$/,
        message: COOPERATION_TEXT.fields.phone.invalidMessage,
      },
    },
    {
      name: "city",
      type: "text",
      placeholder: COOPERATION_TEXT.fields.city.placeholder,
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      placeholder: COOPERATION_TEXT.fields.message.placeholder,
      required: true,
      minLength: 5,
    },
  ],
};
