import { ErrorMessage } from "formik";

import { ErrorText } from "./FieldError.styled";

type FieldErrorProps<T> = {
  name: keyof T & string;
};

export function FieldError<T>({ name }: FieldErrorProps<T>) {
  return (
    <ErrorMessage name={name}>{(msg) => (msg ? <ErrorText>{msg}</ErrorText> : null)}</ErrorMessage>
  );
}
