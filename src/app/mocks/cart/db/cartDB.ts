import type { CartRow, CartOwnerId } from "@/entities/cart/types";

import { STORAGE_KEYS } from "@/shared/constants/storage";

function load(): Record<string, CartRow[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    return raw ? JSON.parse(raw) : { guest: [] };
  } catch {
    return { guest: [] };
  }
}

function save(db: Record<string, CartRow[]>) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(db));
}

let cartDB: Record<string, CartRow[]> = load();

export function getCartDB() {
  return cartDB;
}

export function setCartDB(next: Record<string, CartRow[]>) {
  cartDB = next;
  save(cartDB);
}

export function ensureCart(ownerId: CartOwnerId): CartRow[] {
  if (!cartDB[ownerId as string]) {
    cartDB[ownerId as string] = [];
    save(cartDB);
  }

  return cartDB[ownerId as string];
}
