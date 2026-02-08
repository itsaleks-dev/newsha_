export const SEARCH_PAGE_TEXT = {
  TITLE_EMPTY: "Пошук",
  TITLE_RESULTS: (query: string) => `Результати пошуку: “${query}”`,
  MIN_LENGTH: (min: number) => `Введіть мінімум ${min} символи для пошуку`,
} as const;
