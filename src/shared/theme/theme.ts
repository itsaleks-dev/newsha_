import {
  breakpoints,
  media,
  containers,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
} from "./variables";

export const mainTheme = {
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  containers,
  fonts,
  media,
  colors,
};

export type ThemeType = typeof mainTheme;
