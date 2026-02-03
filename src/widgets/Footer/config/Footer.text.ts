import type { FooterTextType } from "./Footer.types";

export const FOOTER_TEXT: FooterTextType = {
  WORK: {
    TITLE: "Графік роботи",
    LINKS: [
      { label: "Пн–Пт · 09:00–18:00" },
      { label: "Сб–Нд · вихідні" },
      { label: "Телефон · +380 50 412 30 42", href: "tel:+380504123042" },
    ],
  },

  MENU: {
    TITLE: "Навігація",
    LINKS: [
      { label: "Головна", href: "/" },
      { label: "Каталог", href: "/catalog" },
      { label: "Контакти", href: "/contacts" },
    ],
  },

  ABOUT: {
    TITLE: "Бренд",
    LINKS: [
      { label: "Про NEWSHA", href: "/about" },
      { label: "Співробітництво", href: "/cooperation" },
      { label: "Доставка та оплата", href: "/delivery" },
    ],
  },

  INFO: {
    TITLE: "Умови",
    LINKS: [
      { label: "Обмін та повернення", href: "/returns" },
      { label: "Публічна оферта", href: "/offer" },
      { label: "Політика конфіденційності", href: "/privacy" },
    ],
  },
};

export const FOOTER_COPYRIGHT = "NEWSHA – Professional Hair Care. © 2026 All rights reserved.";
