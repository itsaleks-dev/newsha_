import type { Product } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_COLOR_MASQUE_BERRY_BURGUNDY: Product = {
  id: asID("prod-color-masque-berry-burgundy"),
  code: "2915011 / 29150011",
  name: "КОЛЬОРОВА МАСКА COLOR MASQUE BERRY BURGUNDY",
  nameEn: "COLOR MASQUE BERRY BURGUNDY",
  nameUa: "Кольорова маска Бургундські ягоди",
  slug: asSlug("color-masque-berry-burgundy"),
  categoryId: asID("color-masque"),
  gallery: [
    {
      type: "image",
      url: "/images/color/color-masque.webp",
      alt: "Кольорова маска Color Masque Berry Burgundy 150 мл",
      isPrimary: true,
    },
  ],

  shortDescription:
    "Кольорова маска для тонування волосся у відтінку Бургундські ягоди з інтенсивним доглядовим комплексом.",

  description: `Кольорова маска Berry Burgundy (Бургундські ягоди) підходить для світлого та темного волосся.
    Світле волосся набуває виразно фіолетово-ягідного вигляду. Чим темніше початковий тон, тим інтенсивніше благородне фіолетове мерехтіння. Berry Burgundy надає кожному кольору волосся фіолетово-ягідний відтінок!
    Світло-русяве волосся набуває більш насиченого фіолетового ягідного відтінку. Berry Burgundy створює фіолетові відблиски на світлому та середньому каштановому волоссі.
    Збагачена доглядовим комплексом NEWSHA, маска доглядає і зміцнює структуру волосся:
        • Кератин зміцнює волосся зсередини і захищає його поверхню.
        • Пантенол інтенсивно зволожує волосся і надає йому еластичність.
        • Пшеничний протеїн обволікає волосся як захисна оболонка і надає йому еластичність і силу.
        • Соєвий протеїн зміцнює структуру волосся, роблячи його сильним і здоровим.
        • Амінокислоти пшениці виступають додатковою порцією захисту і догляду та ідеально завершують доглядовий комплекс NEWSHA Care.
    Кольорова маска не зафарбовує сивину, а тимчасово маскує її, надаючи волоссю більш рівномірний відтінок.`,

  basePrice: asMoney(917),

  volumes: [
    {
      value: ProductVolume.ML_150,
      label: "150 мл",
      price: asMoney(917),
      inStock: true,
      unit: "ml",
      image: "/images/color/color-masque.webp",
    },
  ],

  tags: ["тонуюча маска", "збереження кольору", "блиск", "фіолетовий відтінок", "dryness"],

  isNew: false,
  isBestseller: true,
  isActive: true,

  reviewStats: {
    average: 4.7,
    count: 8,
    stars: { 5: 6, 4: 2, 3: 0, 2: 0, 1: 0 },
  },

  seo: {
    title: "Кольорова маска Berry Burgundy | Тонуюча маска NEWSHA",
    description:
      "Кольорова маска Berry Burgundy надає волоссю фіолетово-ягідний відтінок і забезпечує інтенсивний догляд.",
    keywords: [
      "тонуюча маска",
      "berry burgundy",
      "бургундські ягоди",
      "кольорова маска для волосся",
    ],
    ogImage: "/images/color/color-masque.webp",
  },
};
