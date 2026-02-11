import type * as Yup from "yup";

export const DELIVERY_METHOD = {
  Warehouse: "warehouse",
  Postomat: "postomat",
  Courier: "courier",
} as const;

export type DeliveryMethod = (typeof DELIVERY_METHOD)[keyof typeof DELIVERY_METHOD];

export const PAYMENT_METHOD = {
  CashOnDelivery: "cash",
  Online: "online",
} as const;

export type PaymentMethod = (typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD];

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

export type CheckoutFormFormValues = {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;

  deliveryMethod: DeliveryMethod;
  city: string;
  warehouse: string;
  postomat: string;
  address: string;

  paymentMethod: PaymentMethod;
  comment: string;
};

export type CooperationFormValues = {
  name: string;
  phone: string;
  city: string;
  message: string;
};

export type ReviewFormValues = {
  rating: number;
  text: string;
  photos: File[];
};
