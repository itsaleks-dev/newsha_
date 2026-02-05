import type { ErrorCode, ErrorContent } from "./ErrorPage.config";

export const ERROR_CONTENT: Record<ErrorCode, ErrorContent> = {
  "403": {
    code: "403",
    title: "Доступ заборонено",
    description: "Ви не маєте прав для перегляду цієї сторінки.",
    actions: [
      { label: "Увійти", to: "/login", primary: true },
      { label: "На головну", to: "/" },
      { label: "Каталог", to: "/catalog" },
    ],
  },

  "404": {
    code: "404",
    title: "Сторінку не знайдено",
    description: "Сторінка, яку ви шукаєте, не існує або була переміщена.",
    actions: [{ label: "На головну", to: "/", primary: true }],
  },

  "500": {
    code: "500",
    title: "Помилка сервера",
    description: "На сервері сталася помилка. Будь ласка, спробуйте пізніше.",
    actions: [{ label: "На головну", to: "/" }],
  },
};
