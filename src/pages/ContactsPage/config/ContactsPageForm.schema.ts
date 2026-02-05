import * as Yup from "yup";
import type { FormSchema } from "@/shared/ui/Form/schema";
import { CONTACTS_PAGE_TEXT } from "./ContactsPage.text";

export type ContactsFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const CONTACTS_FORM_SCHEMA: FormSchema<ContactsFormValues> = {
  title: CONTACTS_PAGE_TEXT.form.title,
  submitLabel: CONTACTS_PAGE_TEXT.form.submit,
  method: "POST",
  validateBeforeSubmit: true,

  initialValues: {
    name: "",
    email: "",
    phone: "",
    message: "",
  },

  validationSchema: Yup.object({
    name: Yup.string().required("Вкажіть імʼя"),
    email: Yup.string().email("Некоректний email").required("Вкажіть email"),
    phone: Yup.string().required("Вкажіть телефон"),
    message: Yup.string().min(10, "Мінімум 10 символів").required("Напишіть питання"),
  }),

  fields: [
    {
      name: "name",
      label: CONTACTS_PAGE_TEXT.form.fields.name.label,
      type: "text",
      placeholder: CONTACTS_PAGE_TEXT.form.fields.name.placeholder,
      required: true,
    },
    {
      name: "email",
      label: CONTACTS_PAGE_TEXT.form.fields.email.label,
      type: "email",
      placeholder: CONTACTS_PAGE_TEXT.form.fields.email.placeholder,
      required: true,
    },
    {
      name: "phone",
      label: CONTACTS_PAGE_TEXT.form.fields.phone.label,
      type: "phone",
      placeholder: CONTACTS_PAGE_TEXT.form.fields.phone.placeholder,
      required: true,
    },
    {
      name: "message",
      label: CONTACTS_PAGE_TEXT.form.fields.message.label,
      type: "textarea",
      placeholder: CONTACTS_PAGE_TEXT.form.fields.message.placeholder,
      required: true,
    },
  ],
};
