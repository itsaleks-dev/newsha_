import { TEXT } from "@/shared/text";

export const CONSTANTS = {
  DEFAULT_LANGUAGE: "ua",

  CURRENCY: {
    DISPLAY: "грн",
  },

  PAGINATION: {
    PRODUCTS_PER_PAGE: 20,
  },

  SEO_DEFAULT: {
    title: TEXT.SEO_TITLE,
    description: TEXT.SEO_DESCRIPTION,
  },
} as const;
