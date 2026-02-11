export const PROFILE_MENU = [
  { key: "orders", label: "Мої замовлення", danger: false },
  { key: "favorites", label: "Обране", danger: false },
  { key: "addresses", label: "Адреси доставки", danger: false },
  { key: "payments", label: "Платіжні методи", danger: false },
  { key: "logout", label: "Вийти", danger: true },
] as const;

export type ProfileMenuKey = (typeof PROFILE_MENU)[number]["key"];
