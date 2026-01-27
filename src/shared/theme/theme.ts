import {
  breakpoints,
  media,
  containers,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from "./variables";

export const mainTheme = {
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  containers,
  fonts,
  media,
};

export type ThemeType = typeof mainTheme;
