import type * as Yup from "yup";

export type FormFieldType =
  | "text"
  | "email"
  | "password"
  | "textarea"
  | "number"
  | "checkbox"
  | "radio"
  | "select"
  | "search"
  | "phone"
  | "file";

export type FormFieldOption = {
  value: string | number;
  label: string;
};

export type FormField = {
  name: string;
  label?: string;
  type: FormFieldType;
  placeholder?: string;
  options?: ReadonlyArray<FormFieldOption>;
  readonly?: boolean;
  multiple?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export type FormSchema<TValues = Record<string, unknown>> = {
  title?: string;
  submitLabel: string;
  method?: "POST" | "PUT" | "PATCH";
  validateBeforeSubmit?: boolean;
  initialValues: TValues;
  validationSchema?: Yup.ObjectSchema<Record<string, unknown>>;

  fields: ReadonlyArray<FormField>;
};
