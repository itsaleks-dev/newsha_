import type { CartRow, CartOwnerId } from "@/entities/cart/types";
import { mergeCarts } from "@/entities/cart/domain";

import { getCartDB, setCartDB, ensureCart } from "@/app/mocks/cart/db";

import type { ID } from "@/shared/types/primitives";

const clone = <T>(v: T): T => structuredClone(v);

const isSameRow = (a: CartRow, productId: ID, volumeValue: number) =>
  a.productId === productId && a.volumeValue === volumeValue;

export const mockCartApi = {
  async get(userId: CartOwnerId): Promise<readonly CartRow[]> {
    return clone(ensureCart(userId));
  },

  async add(userId: CartOwnerId, item: CartRow): Promise<readonly CartRow[]> {
    const db = getCartDB();
    const current = ensureCart(userId);

    const exists = current.some((r) => isSameRow(r, item.productId, item.volumeValue));

    const next = exists
      ? current.map((r) => (isSameRow(r, item.productId, item.volumeValue) ? item : r))
      : [...current, item];

    db[userId as string] = next;
    setCartDB(db);

    return clone(next);
  },

  async remove(
    userId: CartOwnerId,
    productId: ID,
    volumeValue: number,
  ): Promise<readonly CartRow[]> {
    const db = getCartDB();

    const next = ensureCart(userId).filter(
      (i) => !(i.productId === productId && i.volumeValue === volumeValue),
    );

    db[userId as string] = next;
    setCartDB(db);

    return clone(next);
  },

  async removeLine(
    userId: CartOwnerId,
    productId: ID,
    volumeValue: number,
  ): Promise<readonly CartRow[]> {
    return this.remove(userId, productId, volumeValue);
  },

  async clear(userId: CartOwnerId): Promise<readonly CartRow[]> {
    const db = getCartDB();
    db[userId as string] = [];
    setCartDB(db);
    return [];
  },

  async mergeGuestToUser(guestId: "guest", userId: ID) {
    const db = getCartDB();
    db[userId as string] = mergeCarts(ensureCart(guestId), ensureCart(userId));
    db[guestId] = [];
    setCartDB(db);
  },
};
