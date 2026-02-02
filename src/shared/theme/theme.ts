import {
  breakpoints,
  media,
  containers,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  icons,
} from "./variables";

import logoHeader from "/icons/logo_newsha_white.svg";
import logoFooter from "/icons/logo_newsha.svg";

export const mainTheme = {
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  containers,
  fonts,
  media,
  colors,
  icons,

  assets: {
    logo: {
      header: logoHeader,
      footer: logoFooter,
    },
  },
};

export type ThemeType = typeof mainTheme;

export type LogoVariant = keyof ThemeType["assets"]["logo"];
export type IconVariant = keyof ThemeType["icons"];
export type Breakpoint = keyof ThemeType["breakpoints"];
