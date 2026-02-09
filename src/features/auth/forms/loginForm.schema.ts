import * as Yup from "yup";

import type { FormSchema } from "@/shared/ui/Form/schema";

import { LOGIN_FORM_TEXT as TEXT, LOGIN_VALIDATION_TEXT as T } from "@/features/auth/config";

export const loginForm: FormSchema<{
  email: string;
  password: string;
}> = {
  title: TEXT.TITLE,
  submitLabel: TEXT.SUBMIT,
  method: "POST",

  initialValues: {
    email: "",
    password: "",
  },

  validationSchema: Yup.object({
    email: Yup.string().email(T.EMAIL_INVALID).required(T.REQUIRED),

    password: Yup.string().min(6, T.PASSWORD_MIN).required(T.REQUIRED),
  }),

  fields: [
    {
      name: "email",
      type: "email",
      label: TEXT.EMAIL_LABEL,
      placeholder: TEXT.EMAIL_PLACEHOLDER,
    },
    {
      name: "password",
      type: "password",
      label: TEXT.PASSWORD_LABEL,
    },
  ],
};
