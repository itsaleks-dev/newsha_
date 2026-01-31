import type { Product } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_MEN_SEVERE_THICKENING_SHAMPOO: Product = {
  id: asID("prod-men-severe-thickening-shampoo"),
  code: "28833 / 28834",
  name: "ШАМПУНЬ УЩІЛЬНЮЮЧИЙ MEN SEVERE THICKENING SHAMPOO",
  nameEn: "MEN SEVERE THICKENING SHAMPOO",
  nameUa: "ШАМПУНЬ УЩІЛЬНЮЮЧИЙ",
  slug: asSlug("men-severe-thickening-shampoo"),
  categoryId: asID("care-shampoo"),
  gallery: [
    {
      type: "image",
      url: "/images/shampoo/severe-shampoo-product-80ml.webp",
      alt: "Men Severe Thickening Shampoo 80 мл",
      isPrimary: true,
    },
    {
      type: "image",
      url: "/images/shampoo/severe-shampoo-product-250ml.webp",
      alt: "Men Severe Thickening Shampoo 250 мл",
      isPrimary: false,
    },
  ],

  shortDescription:
    "Ущільнюючий шампунь з кофеїном. Сприяє кровообігу шкіри голови, роблячи волосся міцним та здоровим.",

  description: `Ущільнюючий шампунь з кофеїном Severe Thinckening Shampoo – це ваш ключ до сильного волосся. Потужні властивості кофеїну в складі стимулюють ріст волосся та роблять його міцнішим і здоровішим. Він ідеально підходить для чоловіків, які прагнуть зміцнити своє волосся і забезпечити йому більшу стійкість та об’єм.
    ПЕРЕВАГИ:
        • Зміцнює волосся, збільшуючи його густоту та пружність.
        • Стимулює ріст завдяки екстракту кофеїну.
        • Ідеально підходить для підготовки волосся до укладання.
    АКТИВНИЙ ІНГРЕДІЄНТ:
        Кофеїн активізує мікроциркуляцію шкіри голови, сприяючи кращому кровообігу та зміцненню коренів волосся. Це допомагає подовжити фазу росту волосся і ефективно боротися з випадінням волосся. Цей шампунь ідеально підходить для чоловіків, які шукають рішення для збереження сили та щільності свого волосся.
        Зробіть своє волосся дивовижно сильним та повним життя з нашим шампунем SEVERE THICKENING SHAMPOO від Newsha для зміцнення та об’єму.
`,

  howToUse:
    "Ніжними масажними рухами нанесіть шампунь на вологе волосся та шкіру голови, залиште на 2-3 хвилини, після ретельно змийте водою. За необхідності повторіть нанесення.",

  ingredients:
    "AQUA (WATER), SODIUM LAURETH SULFATE, COCAMIDOPROPYL BETAINE, GLYCOL DISTEARATE, PHENOXYETHANOL, PARFUM (FRAGRANCE), SODIUM CHLORIDE, POLYQUATERNIUM-6, CARBOMER, LAURETH-4, POLYQUATERNIUM-28, SODIUM HYDROXIDE, SODIUM BENZOATE, HYDROLYZED WHEAT PROTEIN, TRIETHYLENE GLYCOL, TAURINE, LIMONENE, SODIUM PHYTATE, GLYCERIN, CITRIC ACID, LACTIC ACID, HEXYL CINNAMAL, CITRAL, HYDROLYZED SOY PROTEIN, LINALOOL, PROPANEDIOL, PANTHENOL, POLYQUATERNIUM-11, PROPYLENE GLYCOL, BIOTIN, ZINC PCA, GLUCOSE, ARGININE HCL, NIACINAMIDE, ORNITHINE HCL, PANAX GINSENG ROOT EXTRACT, CITRULLINE, GLUCOSAMINE HCL, PYRIDOXINE, ALLIUM CEPA BULB EXTRACT.",

  basePrice: asMoney(802),

  volumes: [
    {
      value: ProductVolume.ML_80,
      label: "80 мл",
      price: asMoney(802),
      inStock: true,
      unit: "ml",
      image: "/images/shampoo/severe-shampoo-product-80ml.webp",
    },
    {
      value: ProductVolume.ML_250,
      label: "250 мл",
      price: asMoney(1422),
      inStock: true,
      unit: "ml",
      image: "/images/shampoo/severe-shampoo-product-250ml.webp",
    },
  ],

  tags: [
    "ущільнюючий шампунь",
    "стимулює ріст ",
    "міцне волосся",
    "здорове волосся",
    "шампунь для чоловіків",
  ],

  isNew: false,
  isBestseller: true,
  isActive: true,

  reviewStats: {
    average: 4.9,
    count: 20,
    stars: {
      5: 17,
      4: 3,
      3: 0,
      2: 0,
      1: 0,
    },
  },

  seo: {
    title:
      "Шампунь ущільнюючий Men Severe Thickening Shampoo 80 мл  | Шампунь ущільнюючий Men Severe Thickening Shampoo 250 мл | Шампунь для чоловіків NEWSHA",
    description:
      "Зробіть своє волосся дивовижно сильним та повним життя з нашим шампунем SEVERE THICKENING SHAMPOO від Newsha для зміцнення та об’єму.",
    keywords: [
      "ущільнюючий шампунь",
      "стимулює ріст ",
      "міцне волосся",
      "здорове волосся",
      "шампунь для чоловіків",
    ],
    ogImage: "/images/shampoo/severe-shampoo-product-250ml.webp",
  },
};
