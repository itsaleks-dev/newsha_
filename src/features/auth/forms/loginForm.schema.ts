import * as Yup from "yup";

import { LOGIN_FORM_TEXT as TEXT, LOGIN_VALIDATION_TEXT as T } from "@/features/auth/config";

import type { FormSchema } from "@/shared/ui/Form/schema";

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
      label: TEXT.EMAIL_LABEL,
      type: "email",
      placeholder: TEXT.EMAIL_PLACEHOLDER,
    },
    {
      name: "password",
      label: TEXT.PASSWORD_LABEL,
      type: "password",
    },
  ],
};
