import type { Product, ProductPreview } from "@/entities/product/types";

import { asMoney } from "@/shared/types";

export function toProductPreviewUI(p: Product): ProductPreview {
  const primaryImage =
    p.gallery.find((g) => g.type === "image" && g.isPrimary) ||
    p.gallery.find((g) => g.type === "image");

  const price = p.basePrice ?? p.volumes?.[0]?.price ?? asMoney(0);

  const oldPrice = p.baseOldPrice ?? p.volumes?.[0]?.oldPrice;

  const preview: ProductPreview = {
    id: p.id,
    slug: p.slug,
    name: p.nameUa || p.nameEn || p.name,
    nameEn: p.nameEn,
    nameUa: p.nameUa,
    price,
    categoryId: p.categoryId,
  };

  if (primaryImage) {
    preview.image = primaryImage.url;
  }

  if (oldPrice !== undefined) preview.oldPrice = oldPrice;

  if (p.reviewStats?.average !== undefined) {
    preview.rating = p.reviewStats.average;
  }

  if (p.reviewStats?.count !== undefined) {
    preview.reviewCount = p.reviewStats.count;
  }

  if (p.isNew !== undefined) preview.isNew = p.isNew;
  if (p.isBestseller !== undefined) preview.isBestseller = p.isBestseller;
  if (p.isTop !== undefined) preview.isTop = p.isTop;
  if (p.volumes) preview.volumes = p.volumes;
  if (p.tags) preview.tags = p.tags;
  if (p.needs) preview.needs = p.needs;
  if (p.condition) preview.condition = p.condition;

  return preview;
}
