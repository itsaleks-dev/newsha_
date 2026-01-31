import type { Product } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_LUXE_TREATMENT_OIL: Product = {
  id: asID("prod-luxe-treatment-oil"),
  code: "28570 / 28571",
  name: "ОЛІЯ ЛЮКСОВИЙ ДОГЛЯД LUXE TREATMENT OIL",
  nameEn: "LEAVE-IN CONDITIONER",
  nameUa: "LUXE TREATMENT OIL",
  slug: asSlug("luxe-treatment-oil"),
  categoryId: asID("care-oil"),
  gallery: [
    {
      type: "image",
      url: "/images/oil/oil-30ml.webp",
      alt: "Luxe Treatment Oil 30 мл",
      isPrimary: true,
    },
    {
      type: "image",
      url: "/images/oil/oil-100ml.webp",
      alt: "Luxe Treatment Oil 100 мл",
      isPrimary: false,
    },
  ],

  shortDescription:
    "Насичена, але легка олія для догляду і укладки з аргановою олією. Еластичність, блиск та ефект швидкого висихання.",

  description: `Наш універсальний засіб з аргановою олією має численні переваги: насичена, але легка олія для догляду і укладки надає волоссю   еластичність, чіткість і додатковий блиск.
    Luxe Treatment Oil прискорює висихання волосся і спрощує укладку.
    Арганова олія багата на ненасичені жирні кислоти омега-3 і омега-9, які зміцнюють волосся, запобігають появі посічених кінчиків і надають волоссю здорового вигляду. Також містить концентровану кількість природних антиоксидантів і вітаміну Е.
    ПЕРЕВАГИ:
        • Насичена, але легка олія для догляду і укладки
        • Забезпечує еластичність і розкішний блиск
        • Ефект швидкого висихання`,
  howToUse:
    "Нанесіть невелику кількість на підсушене рушником волосся, приділяючи увагу середині довжини і кінчикам, далі укладіть як зазвичай. Для фінішу можна нанести невелику кількість на сухе волосся.",
  effects:
    "Еластичність, блиск, пом’якшення, зменшення посічених кінчиків, швидше висихання волосся.",
  ingredients:
    "CYCLOPENTASILOXANE, DIMETHICONE, ARGANIA SPINOSA KERNEL OIL, VACCINIUM MACROCARPON (CRANBERRY) SEED OIL, CORYLUS AVELLANA (HAZEL) SEED OIL, JUGLANS REGIA (WALNUT) SEED OIL, COCODIMONIUM HYDROXYPROPYL HYDROLYZED KERATIN, PARFUM, LIMONENE, HEXYL CINNAMAL, BENZYL BENZOATE, LINALOOL, COUMARIN, CI 47000, CI 26100, CI 60725.",

  basePrice: asMoney(1607),

  volumes: [
    {
      value: ProductVolume.ML_30,
      label: "30 мл",
      price: asMoney(1607),
      inStock: true,
      unit: "ml",
      image: "/images/oil/oil-30ml.webp",
    },
    {
      value: ProductVolume.ML_100,
      label: "100 мл",
      price: asMoney(2924),
      inStock: true,
      unit: "ml",
      image: "/images/oil/oil-100ml.webp",
    },
  ],

  tags: ["олія для волосся", "арганова олія", "блиск", "посічені кінчики"],

  isNew: false,
  isBestseller: true,
  isActive: true,

  reviewStats: {
    average: 4.9,
    count: 20,
    stars: { 5: 18, 4: 2, 3: 0, 2: 0, 1: 0 },
  },

  seo: {
    title: "Luxe Treatment Oil | Олія для волосся з арганою",
    description:
      "Насичена, але легка олія з арганою для догляду і укладки. Еластичність, блиск і захист від посічених кінчиків.",
    keywords: ["олія для волосся", "арганова олія", "luxe treatment oil"],
    ogImage: "/images/oil/oil-100ml.webp",
  },
};
