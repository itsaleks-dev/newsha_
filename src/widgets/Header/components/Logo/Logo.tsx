import { useTheme } from "styled-components";

import type { ThemeType, LogoVariant } from "@/shared/theme";

import { LOGO_TEXT as T } from "@/widgets/Header/components/Logo/config";

import { LogoImage, Tagline, LogoRoot } from "./Logo.styled";

interface LogoProps {
  variant?: LogoVariant;
  alt?: string;
}

export function Logo({ variant = "header", alt = "NEWSHA" }: LogoProps) {
  const theme = useTheme() as ThemeType;

  return (
    <LogoRoot>
      <LogoImage src={theme.assets.logo[variant]} alt={alt} />
      <Tagline>{T.SUBLOGO}</Tagline>
    </LogoRoot>
  );
}
