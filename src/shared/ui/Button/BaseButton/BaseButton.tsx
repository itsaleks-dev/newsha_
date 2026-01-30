import type { ButtonProps } from "@/shared/ui/Button/types";

import { ButtonRoot } from "./BaseButton.styled";

export function BaseButton({
  variant = "primary",
  size = "md",
  fullWidth,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonRoot
      $variant={variant}
      $size={size}
      $fullWidth={!!fullWidth}
      $loading={!!loading}
      aria-busy={loading}
      {...props}
    >
      {children}
    </ButtonRoot>
  );
}
