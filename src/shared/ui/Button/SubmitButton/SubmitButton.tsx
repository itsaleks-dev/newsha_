import { useFormikContext } from "formik";

import type { SubmitButtonProps } from "@/shared/ui/Button/types";

import { BaseButton } from "@/shared/ui/Button/BaseButton";

export function SubmitButton({ children }: SubmitButtonProps) {
  const { isSubmitting, isValid } = useFormikContext();
  const disabled = isSubmitting || !isValid;

  return (
    <BaseButton type="submit" disabled={disabled} loading={isSubmitting}>
      {children}
    </BaseButton>
  );
}
