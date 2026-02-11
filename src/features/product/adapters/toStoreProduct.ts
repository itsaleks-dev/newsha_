import type { Product, StoreProduct, ProductVolumeOption } from "@/entities/product/types";

const cloneVolume = (v: ProductVolumeOption): ProductVolumeOption => ({ ...v });

export function toStoreProduct(p: Product): StoreProduct {
  const storeProduct: StoreProduct = {
    id: p.id,
    code: p.code,
    name: p.name,
    nameEn: p.nameEn,
    nameUa: p.nameUa,
    slug: p.slug,
    categoryId: p.categoryId,
    description: p.description,
    isActive: p.isActive,
    gallery: p.gallery.map((g) => ({ ...g })),

    ...(p.image !== undefined ? { image: p.image } : {}),
    ...(p.price !== undefined ? { price: p.price } : {}),
    ...(p.oldPrice !== undefined ? { oldPrice: p.oldPrice } : {}),
    ...(p.shortDescription !== undefined ? { shortDescription: p.shortDescription } : {}),
    ...(p.howToUse !== undefined ? { howToUse: p.howToUse } : {}),
    ...(p.effects !== undefined ? { effects: p.effects } : {}),
    ...(p.ingredients !== undefined ? { ingredients: p.ingredients } : {}),
    ...(p.basePrice !== undefined ? { basePrice: p.basePrice } : {}),
    ...(p.baseOldPrice !== undefined ? { baseOldPrice: p.baseOldPrice } : {}),
    ...(p.isNew !== undefined ? { isNew: p.isNew } : {}),
    ...(p.isBestseller !== undefined ? { isBestseller: p.isBestseller } : {}),
    ...(p.isTop !== undefined ? { isTop: p.isTop } : {}),

    ...(p.reviewStats
      ? {
          reviewStats: {
            average: p.reviewStats.average,
            count: p.reviewStats.count,
            stars: { ...p.reviewStats.stars },
          },
        }
      : {}),
  };

  if (p.volumes) storeProduct.volumes = p.volumes.map(cloneVolume);
  if (p.tags) storeProduct.tags = [...p.tags];
  if (p.needs) storeProduct.needs = [...p.needs];
  if (p.condition) storeProduct.condition = [...p.condition];

  if (p.seo) {
    storeProduct.seo = {
      ...(p.seo.title !== undefined ? { title: p.seo.title } : {}),
      ...(p.seo.description !== undefined ? { description: p.seo.description } : {}),
      ...(p.seo.ogImage !== undefined ? { ogImage: p.seo.ogImage } : {}),
      ...(p.seo.keywords ? { keywords: [...p.seo.keywords] } : {}),
    };
  }

  return storeProduct;
}
