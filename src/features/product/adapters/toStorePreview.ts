import type {
  ProductPreview,
  StoreProductPreview,
  ProductVolumeOption,
} from "@/entities/product/types";

const cloneVolume = (v: ProductVolumeOption): ProductVolumeOption => ({ ...v });

export function toStorePreview(p: ProductPreview): StoreProductPreview {
  const r: StoreProductPreview = {
    id: p.id,
    slug: p.slug,
    name: p.name,
    nameEn: p.nameEn,
    nameUa: p.nameUa,
    price: p.price,
    categoryId: p.categoryId,

    ...(p.oldPrice !== undefined ? { oldPrice: p.oldPrice } : {}),
    ...(p.rating !== undefined ? { rating: p.rating } : {}),
    ...(p.reviewCount !== undefined ? { reviewCount: p.reviewCount } : {}),
    ...(p.isNew !== undefined ? { isNew: p.isNew } : {}),
    ...(p.isBestseller !== undefined ? { isBestseller: p.isBestseller } : {}),
    ...(p.isTop !== undefined ? { isTop: p.isTop } : {}),
  };

  if (p.image !== undefined) r.image = p.image;

  if (p.volumes) r.volumes = p.volumes.map(cloneVolume);
  if (p.tags) r.tags = [...p.tags];
  if (p.needs) r.needs = [...p.needs];
  if (p.condition) r.condition = [...p.condition];

  return r;
}
