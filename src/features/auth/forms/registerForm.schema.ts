import * as Yup from "yup";

import type { FormSchema } from "@/shared/ui/Form/schema";

import { REGISTER_FORM_TEXT as TEXT, REGISTER_VALIDATION_TEXT as T } from "@/features/auth/config";

export const registerForm: FormSchema<{
  name: string;
  phone: string;
  email: string;
  password: string;
  password2: string;
}> = {
  title: TEXT.TITLE,
  submitLabel: TEXT.SUBMIT,
  method: "POST",

  initialValues: {
    name: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  },

  validationSchema: Yup.object({
    name: Yup.string().min(2, T.NAME_MIN).required(T.REQUIRED),

    phone: Yup.string().required(T.REQUIRED),

    email: Yup.string().email(T.EMAIL_INVALID).required(T.REQUIRED),

    password: Yup.string().min(6, T.PASSWORD_MIN).required(T.REQUIRED),

    password2: Yup.string()
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
      name: "phone",
      label: TEXT.PHONE_LABEL,
      type: "phone",
      placeholder: TEXT.PHONE_PLACEHOLDER,
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
      name: "password2",
      label: TEXT.PASSWORD2_LABEL,
      type: "password",
      placeholder: TEXT.PASSWORD2_PLACEHOLDER,
    },
  ],
};
