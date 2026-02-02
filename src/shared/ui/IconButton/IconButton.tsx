import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./IconButton.styled";

type IconButtonProps = {
  icon: ReactNode;
  ariaLabel: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ icon, ariaLabel, ...props }: IconButtonProps) {
  return (
    <Button aria-label={ariaLabel} {...props}>
      {icon}
    </Button>
  );
}
