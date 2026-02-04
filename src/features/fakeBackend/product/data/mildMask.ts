import type { Product } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";

import { asID, asSlug, asMoney } from "@/shared/types/primitives";

export const PRODUCT_MILD_CARE_MASQUE: Product = {
  id: asID("prod-mild-care-masque"),
  code: "28597 / 28598",
  name: "МАСКА ЛАГІДНИЙ ДОГЛЯД MILD CARE MASQUE",
  nameEn: "MILD CARE MASQUE",
  nameUa: "Маска лагідний догляд",
  slug: asSlug("mild-care-masque"),
  categoryId: asID("care-mask"),
  gallery: [
    {
      type: "image",
      url: "/images/mask/mild-150ml.webp",
      alt: "Mild Care Masque 150 мл",
      isPrimary: true,
    },
    {
      type: "image",
      url: "/images/mask/mild-500ml.webp",
      alt: "Mild Care Masque 500 мл",
      isPrimary: false,
    },
  ],

  shortDescription: "Пом’якшувальна маска з екстрактом лаванди для пошкодженого волосся.",

  description: `Маска NEWSHA PURE Mild Care Masque – це м’який інтенсивний догляд для пошкодженого волосся і сухої шкіри голови.
    Заспокійливі і зволожуючі властивості лаванди не тільки дарують пошкодженому волоссю додаткову порцію догляду, а й захищають його від зовнішніх впливів навколишнього середовища.
    Лаванда давно відома як засіб із заспокійливим, доглядовим і відновлюючим ефектом. Зволожуючі властивості лаванди роблять її цінним інгредієнтом для догляду за сухою шкірою і пошкодженим волоссям. Олія лаванди заспокоює і відновлює ламке волосся і дбайливо доглядає за шкірою голови.
    ПЕРЕВАГИ:
        • Ніжний догляд для пошкодженого волосся
        • Пом’якшує і відновлює пошкоджене волосся
        • Захищає волосся від зовнішніх впливів навколишнього середовища

`,
  howToUse:
    "Нанесіть на вимите вологе волосся. Для інтенсивного догляду залиште на 10-15 хвилин. Не наносити на шкіру голови.",
  effects:
    "Лаванда вважається одним з найдавніших і перевірених засобів, що володіють заспокійливими, поживними, відновлюючими і антисептичними властивостями. Важливу роль в цьому відіграють ліналоол, ліналілацетат, камфора і цинеол. Особливо зволожуючі властивості лаванди надають пошкодженому волоссю додаткову порцію турботи, еластичності і блиску, а також захищають волосся від зовнішніх впливів навколишнього середовища.",
  ingredients:
    "AQUA (WATER), CETEARYL ALCOHOL, HYDROXYETHYL DIETHYLENETRIAMINE DIOLEAMIDE/PALMITAMIDE, CETYL ALCOHOL, GLYCERYL STEARATE, THEOBROMA CACAO SEED BUTTER, CETETH-20, PHENOXYETHANOL, ALCOHOL DENAT., PARFUM (FRAGRANCE), GLYCERIN, STEARETH-20, 2-ETHYLHEXYL, STEARATE, HYDROXYETHYL CELLULOSE, MENTHYL LACTATE, TRIETHYLENE GLYCOL, LAVANDULA ANGUSTIFOLA (LAVANDER) FLOWER EXTRACT, LINALOOL, CITRIC ACID, GERANIOL, COUMARIN, SODIUMBENZOATE POTASSIUM SORBATE.",

  basePrice: asMoney(1854),

  volumes: [
    {
      value: ProductVolume.ML_150,
      label: "150 мл",
      price: asMoney(1854),
      inStock: true,
      unit: "ml",
      image: "/images/mask/mild-150ml.webp",
    },
    {
      value: ProductVolume.ML_500,
      label: "500 мл",
      price: asMoney(3504),
      inStock: true,
      unit: "ml",
      image: "/images/mask/mild-500ml.webp",
    },
  ],

  tags: ["об’єм", "стимуляція росту", "маска для тонкого волосся"],

  isNew: true,
  isBestseller: false,
  isActive: true,

  reviewStats: {
    average: 4.4,
    count: 20,
    stars: {
      5: 12,
      4: 6,
      3: 2,
      2: 0,
      1: 0,
    },
  },

  seo: {
    title: "Excellent Volume Masque | Маска для прикореневого об’єму",
    description:
      "Маска для прикореневого об’єму з екстрактом кореня маніока. Дає густоту, текстуру та підтримку укладки.",
    keywords: ["маска для обʼєму", "volume masque", "прикореневий обʼєм", "тонке волосся"],
    ogImage: "/images/mask/mild-150ml.webp",
  },
};
