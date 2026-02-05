export const SEARCH_PAGE_TEXT = {
  TITLE_EMPTY: "Пошук",
  TITLE_RESULTS: (q: string) => `Результати пошуку: “${q}”`,
  MIN_LENGTH: (n: number) => `Введіть мінімум ${n} символи для пошуку`,
} as const;
