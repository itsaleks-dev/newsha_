import type { CartRow } from "@/entities/cart/types";
import { asQuantity } from "@/shared/types/primitives";

export function mergeCarts(a: readonly CartRow[], b: readonly CartRow[]): CartRow[] {
  const map = new Map<string, CartRow>();

  for (const row of [...a, ...b]) {
    const key = `${row.productId}:${row.volumeValue}`;
    const prev = map.get(key);

    if (!prev) {
      map.set(key, { ...row });
    } else {
      map.set(key, {
        ...prev,
        qty: asQuantity((prev.qty as number) + (row.qty as number)),
      });
    }
  }

  return [...map.values()];
}
