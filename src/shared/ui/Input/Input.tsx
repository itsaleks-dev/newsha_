import type React from "react";
import * as S from "./Input.styled";

export type BaseInputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function LoginInput({ label, error, ...props }: BaseInputProps) {
  return (
    <S.InputField $hasError={!!error}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input {...props} />
      {error && <S.InputError>{error}</S.InputError>}
    </S.InputField>
  );
}

export const RegisterInput = LoginInput;
