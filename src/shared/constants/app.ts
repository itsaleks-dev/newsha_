import { TEXT } from "@/shared/text";

const DEFAULT_LANGUAGE = "ua";

export const CONSTANTS = {
  DEFAULT_LANGUAGE,

  PAGINATION: {
    PRODUCTS_PER_PAGE: 20,
  },

  SEO_DEFAULT: {
    title: TEXT.SEO_TITLE,
    description: TEXT.SEO_DESCRIPTION,
  },
} as const;
