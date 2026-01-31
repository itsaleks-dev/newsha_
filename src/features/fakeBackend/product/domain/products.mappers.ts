import type { Product, ProductPreview } from "@/entities/product/types";

export function productToPreview(p: Product): ProductPreview {
  const primaryImage =
    p.gallery.find((g) => g.type === "image" && g.isPrimary)?.url ??
    p.gallery.find((g) => g.type === "image")?.url;

  const price = p.basePrice ?? p.volumes?.[0]?.price;
  if (!price) {
    throw new Error(`Product ${p.id} has no price`);
  }

  const oldPrice = p.baseOldPrice ?? p.volumes?.[0]?.oldPrice;

  return {
    id: p.id,
    slug: p.slug,
    name: p.nameEn || p.nameUa || p.name,
    nameEn: p.nameEn,
    nameUa: p.nameUa,

    ...(primaryImage && { image: primaryImage }),

    price,
    ...(oldPrice && { oldPrice }),

    ...(p.isNew && { isNew: true }),
    ...(p.isBestseller && { isBestseller: true }),
    ...(p.isTop && { isTop: true }),

    ...(p.reviewStats && {
      rating: p.reviewStats.average,
      reviewCount: p.reviewStats.count,
    }),

    ...(p.volumes && { volumes: p.volumes }),

    categoryId: p.categoryId,

    ...(p.tags && { tags: p.tags }),
    ...(p.needs && { needs: p.needs }),
    ...(p.condition && { condition: p.condition }),
  };
}
