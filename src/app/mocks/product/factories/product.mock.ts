import type { CatalogCategorySlug } from "@/entities/category/config";
import type { Product, ProductGallery, ProductVolumeOption } from "@/entities/product/types";
import { ProductVolume } from "@/entities/product/types";
import { generateVolumeLabel, enrichProductWithAutoTags } from "@/entities/product/domain";
import type { ReviewStats } from "@/entities/review/types";

import { MOCK_PRODUCT_TEXT } from "@/app/mocks/product/config";

import { asID, asMoney, asSlug, type Money, type Slug } from "@/shared/types";

let counter = 1;

const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;

const pick = <T>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)];

function slugify(text: string): Slug {
  return asSlug(
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-"),
  );
}

function mockGallery(slug: Slug): ProductGallery {
  return [
    {
      type: "image",
      url: `/images/products/${slug}.webp`,
      isPrimary: true,
    },
    {
      type: "image",
      url: `/images/products/${slug}-2.webp`,
      isPrimary: false,
    },
    {
      type: "image",
      url: `/images/products/${slug}-3.webp`,
      isPrimary: false,
    },
  ];
}

function mockVolume(value: ProductVolume, basePrice: Money): ProductVolumeOption {
  const price = asMoney((basePrice as number) + rand(0, 60));

  const oldPrice = Math.random() > 0.7 ? asMoney((price as number) + rand(40, 120)) : undefined;

  return {
    value,
    label: generateVolumeLabel(value, "ml"),
    price,
    inStock: Math.random() > 0.05,
    stock: rand(1, 120),
    unit: "ml",
    ...(oldPrice && {
      oldPrice,
      discountPercent: Math.round(
        (((oldPrice as number) - (price as number)) / (oldPrice as number)) * 100,
      ),
    }),
  };
}

function mockReviews(): ReviewStats {
  const stars = {
    1: rand(0, 3),
    2: rand(0, 5),
    3: rand(0, 10),
    4: rand(0, 40),
    5: rand(0, 120),
  };

  const count = stars[1] + stars[2] + stars[3] + stars[4] + stars[5];

  const average =
    count === 0
      ? 0
      : +(
          (stars[1] * 1 + stars[2] * 2 + stars[3] * 3 + stars[4] * 4 + stars[5] * 5) /
          count
        ).toFixed(2);

  return {
    average,
    count,
    stars,
  };
}

export function mockProduct(
  category: CatalogCategorySlug,
  overrides: Partial<Product> = {},
): Product {
  const n = counter++;

  const id = overrides.id ?? asID(`p-${n}`);
  const name = overrides.name ?? `NEWSHA Hair Product ${n}`;
  const slug = overrides.slug ?? slugify(name);

  const basePrice = overrides.basePrice ?? asMoney(rand(220, 680));

  const baseOldPrice = asMoney((basePrice as number) + rand(40, 120));

  const product: Product = {
    id,
    code: `NH-${id}`,
    name,
    nameEn: name,
    nameUa: name,
    slug,
    categoryId: asID(category),
    gallery: mockGallery(slug),
    image: `/images/products/${slug}.webp`,
    basePrice,
    baseOldPrice,
    shortDescription: pick(MOCK_PRODUCT_TEXT.SHORT_DESCRIPTIONS),
    description: pick(MOCK_PRODUCT_TEXT.DESCRIPTIONS),
    howToUse: pick(MOCK_PRODUCT_TEXT.HOW_TO_USE),
    effects: pick(MOCK_PRODUCT_TEXT.EFFECTS),
    ingredients: pick(MOCK_PRODUCT_TEXT.INGREDIENTS),
    volumes:
      overrides.volumes ??
      [ProductVolume.ML_80, ProductVolume.ML_250, ProductVolume.ML_500].map((v) =>
        mockVolume(v, basePrice),
      ),

    isNew: Math.random() > 0.7,
    isBestseller: Math.random() > 0.6,
    isActive: true,
    reviewStats: mockReviews(),
    seo: {
      title: name,
      description: `Купити ${name} з доставкою по Україні`,
      keywords: [...MOCK_PRODUCT_TEXT.SEO_KEYWORDS],
      ogImage: `/images/products/${slug}.webp`,
    },

    tags: ["newsha", "hair"],
  };

  return enrichProductWithAutoTags({
    ...product,
    ...overrides,
  });
}
