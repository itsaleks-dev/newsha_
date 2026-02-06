export const SHAMPOO_FORMULAS_SECTION = {
  title: "П’ять шампунів. П’ять різних потреб.",
  subTitle:
    "Оберіть догляд, який працює саме для вас — від глибокого очищення до щоденного комфорту.",
} as const;

export const SHAMPOO_FORMULAS_BANNER = {
  placement: "home-promo",
  image: "/images/banner-product/banner-shampoo.webp",
  alt: "NEWSHA shampoo textures",
} as const;

export const SHAMPOO_FORMULAS = [
  {
    key: "deep-cleansing",
    title: "Deep Cleansing",
    description: "Для глибокого очищення та відчуття свіжості",
    link: "/catalog?shampoo=deep-cleansing",
  },
  {
    key: "charcoal-energizing",
    title: "Charcoal Energizing",
    description: "Баланс і енергія для шкіри голови",
    link: "/products/men-severe-thickening-shampoo",
  },
  {
    key: "deluxe-dry",
    title: "Deluxe Dry",
    description: "М’якість і комфорт для сухого волосся",
    link: "/catalog?shampoo=deluxe-dry",
  },
  {
    key: "daily-routine",
    title: "Daily Routine",
    description: "Легкий щоденний догляд без перевантаження",
    link: "/catalog?shampoo=daily-routine",
  },
  {
    key: "gentle-care",
    title: "Gentle Care",
    description: "Делікатне очищення для чутливої шкіри",
    link: "/catalog?shampoo=gentle-care",
  },
] as const;
