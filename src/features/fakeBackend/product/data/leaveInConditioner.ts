import type { Product } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_LEAVE_IN_CONDITIONER: Product = {
  id: asID("prod-leave-in-conditioner"),
  code: "28564 / 28565",
  name: "КОНДИЦІОНЕР КРЕМОВИЙ СПРЕЙ ЩО НЕ ЗМИВАЄТЬСЯ LEAVE-IN CONDITIONER",
  nameEn: "LEAVE-IN CONDITIONER",
  nameUa: "Кондиціонер кремовий що не змивається",
  slug: asSlug("leave-in-conditioner"),
  categoryId: asID("care-conditioner"),
  gallery: [
    {
      type: "image",
      url: "/images/conditioner/leave-in-80ml.webp",
      alt: "Кондиціонер кремовий спрей що не змивається Leave-In Conditioner 80 мл",
      isPrimary: true,
    },
    {
      type: "image",
      url: "/images/conditioner/leave-in-250ml.webp",
      alt: "Кондиціонер кремовий спрей що не змивається Leave-In Conditioner 250 мл",
      isPrimary: false,
    },
  ],

  shortDescription:
    "Твій ідеальний засіб для розплутування волосся з UV-захистом. Справжній бестселер бренду.",

  description: `Кондиціонер NEWSHA Leave-In Conditioner – ваш ефективний спрей для сили та захисту волосся. Цей кондиціонер створений для глибокого догляду, надаючи волоссю необхідну еластичність та блиск без обтяження. Його унікальна формула з екстрактом екзотичного фрукта марули зміцнює волосся, захищає його від зовнішніх пошкоджень і сприяє легкому розчісуванню. Ви забудете про непокірні локони та пухнастість!
    ПЕРЕВАГИ:
        • Забезпечує легке розчісування та підвищує еластичність волосся.
        • Ефективно контролює пухнастість волосся.
        • Кремова консистенція забезпечує рівномірне покриття без обтяження.
        • Захищає від УФ променів та зовнішніх пошкоджень.
        • Не потребує змивання, що забезпечує швидке та зручне нанесення.
    АКТИВНИЙ ІНГРЕДІЄНТ:
        Олія марули холодного віджиму, багата незамінними жирними кислотами та антиоксидантами (вітамінами Е та С), інтенсивно живить волосся, забезпечуючи його зволоженням, міцністю та блиском. Кондиціонер захищає від пошкоджень, зберігає красу та здоров’я вашого волосся на довгий час.
        High Performance Leave-In Conditioner від NEWSHA – інтенсивний догляд, який гарантує ідеальне волосся.

`,

  basePrice: asMoney(863),

  volumes: [
    {
      value: ProductVolume.ML_80,
      label: "80 мл",
      price: asMoney(863),
      inStock: true,
      unit: "ml",
      image: "/images/conditioner/leave-in-80ml.webp",
    },
    {
      value: ProductVolume.ML_250,
      label: "250 мл",
      price: asMoney(1596),
      inStock: true,
      unit: "ml",
      image: "/images/conditioner/leave-in-250ml.webp",
    },
  ],

  tags: [
    "Кондиціонер кремовий",
    "Кондиціонер не змивний",
    "Розплутування волосся",
    "Захист",
    "Пухнастість волосся",
  ],

  isNew: false,
  isBestseller: true,
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
      "Кондиціонер кремовий спрей що не змивається Leave-In Conditioner | Кондиціонер кремовий спрей NEWSHA",
    description:
      "Кондиціонер NEWSHA Leave-In Conditioner – ваш ефективний спрей для сили та захисту волосся.",
    keywords: ["Кондиціонер кремовий", "Захист", "Кондиціонер не змивний", "Розплутування волосся"],
    ogImage: "/images/conditioner/leave-in-250ml.webp",
  },
};
