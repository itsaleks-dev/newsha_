import type { InputHTMLAttributes } from "react";

import { Wrapper, Label, StyledInput, ErrorText } from "./Input.styled";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  name: string;
  id?: string;
  label?: string;
  error?: string;
};

export function Input({ id, label, error, ...props }: InputProps) {
  const inputId = id ?? props.name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <Wrapper>
      {label && <Label htmlFor={inputId}>{label}</Label>}

      <StyledInput id={inputId} aria-invalid={!!error} aria-describedby={errorId} {...props} />

      {error && <ErrorText id={errorId}>{error}</ErrorText>}
    </Wrapper>
  );
}
