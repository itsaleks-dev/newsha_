import * as Yup from "yup";

import { REGISTER_FORM_TEXT as TEXT, REGISTER_VALIDATION_TEXT as T } from "@/features/auth/config";

import type { FormSchema } from "@/shared/ui/Form/schema";

export const registerForm: FormSchema<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}> = {
  title: TEXT.TITLE,
  submitLabel: TEXT.SUBMIT,
  method: "POST",

  initialValues: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },

  validationSchema: Yup.object({
    name: Yup.string().min(2, T.NAME_MIN).required(T.REQUIRED),
    email: Yup.string().email(T.EMAIL_INVALID).required(T.REQUIRED),
    password: Yup.string().min(6, T.PASSWORD_MIN).required(T.REQUIRED),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], T.PASSWORDS_NOT_MATCH)
      .required(T.CONFIRM_REQUIRED),
  }),

  fields: [
    {
      name: "name",
      label: TEXT.NAME_LABEL,
      type: "text",
      placeholder: TEXT.NAME_PLACEHOLDER,
    },
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
      placeholder: TEXT.PASSWORD_PLACEHOLDER,
    },
    {
      name: "confirmPassword",
      label: TEXT.PASSWORD2_LABEL,
      type: "password",
      placeholder: TEXT.PASSWORD2_PLACEHOLDER,
    },
  ],
};
