import type React from "react";
import { useField } from "formik";

import { StyledInput } from "./FieldInput.styled";

type FieldInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "name"> & {
  name: string;
};

export function FieldInput({ name, id, ...props }: FieldInputProps) {
  const [field, meta] = useField(name);

  const hasError = Boolean(meta.touched && meta.error);
  const inputId = id ?? name;
  const errorId = `${inputId}-error`;

  return (
    <StyledInput
      {...field}
      {...props}
      id={inputId}
      $hasError={hasError}
      aria-invalid={hasError}
      aria-describedby={hasError ? errorId : undefined}
    />
  );
}
