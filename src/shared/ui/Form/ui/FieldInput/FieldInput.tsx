import type { ComponentType, InputHTMLAttributes } from "react";
import { useField } from "formik";

import { LoginInput } from "@/shared/ui/Input";

type FieldComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

type FieldInputProps = FieldComponentProps & {
  name: string;
  component?: ComponentType<FieldComponentProps>;
};

export function FieldInput({
  name,
  component: Component = LoginInput,
  label,
  ...props
}: FieldInputProps) {
  const [field, meta] = useField(name);

  const error = meta.touched ? meta.error : undefined;

  return (
    <Component
      {...field}
      {...props}
      {...(label !== undefined ? { label } : {})}
      {...(error !== undefined ? { error } : {})}
    />
  );
}
