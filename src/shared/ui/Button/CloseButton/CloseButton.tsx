import type { CloseButtonProps } from "@/shared/ui/Button/types";

import { CloseRoot } from "./CloseButton.styled";

export function CloseButton({ size = "md", ...props }: CloseButtonProps) {
  return (
    <CloseRoot $size={size} {...props}>
      ×
    </CloseRoot>
  );
}
