import type { Product } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_MILD_CARE_MASQUE_SET: Product = {
  id: asID("prod-mild-care-masque-set"),
  code: "28888",
  name: "СЕТ МАСКА ЛАГІДНИЙ ДОГЛЯД MILD CARE MASQUE SET",
  nameEn: "MILD CARE MASQUE SET",
  nameUa: "СЕТ МАСКА ЛАГІДНИЙ ДОГЛЯД",
  slug: asSlug("mild-care-masque-set"),
  categoryId: asID("sets"),
  gallery: [
    {
      type: "image",
      url: "/images/set/mild-care-set.webp",
      alt: "Mild Care Masque set",
      isPrimary: true,
    },
  ],

  shortDescription:
    "Пом’якшувальна маска з екстрактом лаванди для пошкодженого волосся. Рушник для волоося та Brush",

  description: `Сет NEWSHA PURE Mild Care Masque Set – Ніжна зволожуюча формула забезпечує волосся та шкіру голови цінними поживними речовинами, стійко зміцнює волосяні волокна та помітно їх відновлює. Водночас вона заспокоює шкіру голови та захищає волосся від зовнішніх впливів, одночасно розгладжуючи поверхню волосся – для тривалої еластичності, м'якості та природного блиску – без обтяжень.
`,
  ingredients: `
    Набір містить:
      1x Маска для м'якого догляду 150 мл
      1x Гнучка щітка для вентиляції
      1x Обгортка для волосся`,

  basePrice: asMoney(4257),

  volumes: [
    {
      value: ProductVolume.ML_150,
      label: "1500 мл",
      price: asMoney(4257),
      inStock: true,
      unit: "ml",
      image: "/images/set/mild-care-set.webp",
    },
  ],

  tags: ["об’єм", "стимуляція росту", "маска для тонкого волосся"],

  isNew: true,
  isBestseller: true,
  isActive: true,

  reviewStats: {
    average: 4.7,
    count: 20,
    stars: {
      5: 15,
      4: 4,
      3: 1,
      2: 0,
      1: 0,
    },
  },

  seo: {
    title: "Мʼяка маска для догляду Mild Care Masque Set | Маска для інтенсивного зволоження",
    description:
      "Маска для м'якого догляду – ідеальний вибір для тих, хто хоче забезпечити своєму волоссю інтенсивне зволоження та ніжний догляд.",
    keywords: ["мʼяка маска", "mild masque set", "ніжний догляд", "зволожування", "рушник", "браш", "brush"],
    ogImage: "/images/set/mild-care-set.webp",
  },
};
