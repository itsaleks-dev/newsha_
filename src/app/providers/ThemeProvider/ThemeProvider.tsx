import { ThemeProvider as StyledProvider } from "styled-components";
import { mainTheme } from "@/shared/theme";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  return <StyledProvider theme={mainTheme}>{children}</StyledProvider>;
}
