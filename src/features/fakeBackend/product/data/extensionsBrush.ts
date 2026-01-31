import type { Product } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_EXTENSIONS_CARE_BRASH: Product = {
  id: asID("prod-extensions-care-brush"),
  code: "31365",
  name: "Щітка для догляду за нарощеним волоссям Extensions Care Brush",
  nameEn: "Extensions Care Brush",
  nameUa: "Щітка для догляду за нарощеним волоссям",
  slug: asSlug("extensions-care-brush"),
  categoryId: asID("tools"),
  gallery: [
    {
      type: "image",
      url: "/images/accessories/extensions-brush.webp",
      alt: "Щітка для догляду за нарощеним волоссям Extensions Care Brush",
      isPrimary: true,
    },
  ],

  description:
    "Ідеально підходить для догляду за нарощеним волоссям та допомагає продовжити його термін носіння. Завдяки унікальній конструкції із петлями вона мінімізує ризик пошкоджень, акуратно розплутує та розчісує волосся. Підходить для всіх типів волосся та будь-якого виду нарощування.",

  basePrice: asMoney(1684),
  tags: ["щітка для догляду", "нарощенне волосся", "всі типи волосся"],

  isNew: true,
  isBestseller: false,
  isActive: true,

  reviewStats: {
    average: 4.9,
    count: 10,
    stars: {
      5: 9,
      4: 1,
      3: 0,
      2: 0,
      1: 0,
    },
  },

  seo: {
    title:
      "Щітка для догляду за нарощеним волоссям Extensions Care Brush | Щітка для догляду NEWSHA за нарощеним волоссям | Щітка для догляду NEWSHA ",
    description: "Підходить для всіх типів волосся та будь-якого виду нарощування.",
    keywords: ["щітка для догляду", "нарощенне волосся", "всі типи волосся"],
    ogImage: "/images/accessories/extensions-brush.webp",
  },
};
