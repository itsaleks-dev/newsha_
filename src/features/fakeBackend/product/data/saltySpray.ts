import type { Product } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_SWEET_SALTY_BEACH_SPRAY: Product = {
  id: asID("prod-sweet-salty-beach-spray"),
  code: "28587",
  name: "ПЛЯЖНИЙ ТЕКСТУРУЮЧИЙ СПРЕЙ SWEET & SALTY BEACH SPRAY",
  nameEn: "SWEET & SALTY BEACH SPRAY",
  nameUa: "ПЛЯЖНИЙ ТЕКСТУРУЮЧИЙ СПРЕЙ",
  slug: asSlug("sweet-salty-beach-spray"),
  categoryId: asID("styling"),
  gallery: [
    {
      type: "image",
      url: "/images/styling/salty-spray.webp",
      alt: "Sweet & Salty Beach Spray 125 мл",
      isPrimary: true,
    },
  ],

  shortDescription:
    "Ідеальний вибір для тих, хто хоче додати своєму волоссю текстури, об'єму та природного руху.",

  description: `Спрей Sweet & Salty Beach Spray перетворює нормальне або тонке волосся на помітно текстуроване, текстуроване пляжне хвилясте волосся з вільним, природним покриттям. Полегшує укладання, забезпечує тривалий рух та об'єм, а також надає волоссю розслабленого, літнього вигляду. Ідеально підходить для тих, хто любить прості, природні хвилі, що тримаються цілий день – без силіконів, парабенів та обтяжуючих добавок.

`,
  ingredients:
    "AQUA, PVP, MAGNESIUM SULFATE, SUCROSE, PEG-40 HYDROGENTATED CASTOR OIL, GLYCERIN, PEG-12 DIMETHICONE, PHENOXYETHANOL, PARFUM, MORINDA CITRIFOLIA FRUIT EXTRACT, HYDROLYZED QUINOA, AMINOMETHYL PROPANOL, DISODIUM EDTA, BENZYL SALICYLATE, LINALOOL, LIMONENE",

  basePrice: asMoney(1194),

  volumes: [
    {
      value: ProductVolume.ML_125,
      label: "125 мл",
      price: asMoney(1194),
      inStock: true,
      unit: "ml",
      image: "/images/styling/salty-spray.webp",
    },
  ],

  tags: ["текстура волосся", "обʼєм", "тонке волосся"],

  isNew: false,
  isBestseller: false,
  isActive: true,

  reviewStats: {
    average: 4.6,
    count: 20,
    stars: {
      5: 14,
      4: 4,
      3: 2,
      2: 0,
      1: 0,
    },
  },

  seo: {
    title: "Спрей Sweet & Salty Beach Spray | Спрей Sweet & Salty Beach Spray NEWSHA | Спрей NEWSHA",
    description:
      "Спрей Sweet & Salty Beach Spray - Ідеальний вибір для тих, хто хоче додати своєму волоссю текстури, об'єму та природного руху.",
    keywords: ["текстура волосся", "обʼєм", "sweet & salty", "тонке волосся", "пляжний спрей"],
    ogImage: "/images/styling/salty-spray.webp",
  },
};
