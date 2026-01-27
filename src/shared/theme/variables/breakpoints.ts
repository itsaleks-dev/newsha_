export const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1280,
  desktop: 1440,
  wide: 1920,
  ultra: 2560,
} as const;

export type Breakpoint = keyof typeof breakpoints;
