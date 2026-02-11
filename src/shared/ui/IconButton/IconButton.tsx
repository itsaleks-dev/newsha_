import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./IconButton.styled";

type IconButtonProps = {
  icon: ReactNode;
  ariaLabel: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ icon, ariaLabel, ...props }: IconButtonProps) {
  return (
    <S.Button aria-label={ariaLabel} {...props}>
      {icon}
    </S.Button>
  );
}
