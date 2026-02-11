import { ErrorMessage } from "formik";
import * as S from "./FieldError.styled";

type FieldErrorProps<T> = {
  name: keyof T & string;
};

export function FieldError<T>({ name }: FieldErrorProps<T>) {
  return (
    <ErrorMessage name={name}>
      {(msg) => (msg ? <S.ErrorText>{msg}</S.ErrorText> : null)}
    </ErrorMessage>
  );
}
