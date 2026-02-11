import type { CloseButtonProps } from "@/shared/ui/Button/types";

import * as S from "./CloseButton.styled";

export function CloseButton({ size = "md", ...props }: CloseButtonProps) {
  return (
    <S.CloseRoot $size={size} {...props}>
      ×
    </S.CloseRoot>
  );
}
