import type { Product } from "@/entities/product/types";

export function buildSmartPlaceholders(products: Product[]): string[] {
  const pool = new Set<string>();

  products.forEach((p) => {
    pool.add(p.nameUa);
    pool.add(p.nameEn);
    pool.add(p.name);

    if (p.effects) pool.add(p.effects);

    p.needs?.forEach((n) => pool.add(`Для ${n}`));
    p.condition?.forEach((c) => pool.add(`Для ${c}`));

    p.tags?.forEach((t) => {
      if (t.length > 2 && t.length < 30) pool.add(t);
    });

    p.volumes?.forEach((v) => {
      if (v.value) pool.add(`${p.name} ${v.value} мл`);
    });
  });

  return Array.from(pool).slice(0, 14);
}
