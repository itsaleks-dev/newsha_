import type { ButtonProps } from "@/shared/ui/Button/types";

import * as S from "./BaseButton.styled";

export function BaseButton({
  variant = "primary",
  size = "md",
  fullWidth,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <S.ButtonRoot
      $variant={variant}
      $size={size}
      $fullWidth={!!fullWidth}
      $loading={!!loading}
      aria-busy={loading}
      {...props}
    >
      {children}
    </S.ButtonRoot>
  );
}
