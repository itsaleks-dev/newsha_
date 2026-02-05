import type { CartRow, CartOwnerId } from "@/entities/cart/types";
import { mergeCarts } from "@/entities/cart/domain";

import { cartDB } from "@/app/mocks/cart/db";

import type { ID } from "@/shared/types/primitives";

const delay = (ms = 350) => new Promise((r) => setTimeout(r, ms));
const clone = <T>(v: T): T => structuredClone(v);

const key = (id: CartOwnerId) => id as string;
const ensure = (id: CartOwnerId): CartRow[] => (cartDB[key(id)] ??= []);

export const mockCartApi = {
  async get(userId: CartOwnerId): Promise<readonly CartRow[]> {
    await delay();
    return clone(ensure(userId));
  },

  async add(userId: CartOwnerId, item: CartRow): Promise<readonly CartRow[]> {
    await delay();
    cartDB[key(userId)] = mergeCarts(ensure(userId), [item]);
    return clone(cartDB[key(userId)]);
  },

  async addMany(userId: CartOwnerId, items: CartRow[]): Promise<readonly CartRow[]> {
    await delay();
    cartDB[key(userId)] = mergeCarts(ensure(userId), items);
    return clone(cartDB[key(userId)]);
  },

  async remove(
    userId: CartOwnerId,
    productId: ID,
    volumeValue: number,
  ): Promise<readonly CartRow[]> {
    await delay();
    cartDB[key(userId)] = ensure(userId).filter(
      (i) => !(i.productId === productId && i.volumeValue === volumeValue),
    );
    return clone(cartDB[key(userId)]);
  },

  async clear(userId: CartOwnerId): Promise<readonly CartRow[]> {
    await delay();
    cartDB[key(userId)] = [];
    return [];
  },

  async mergeGuestToUser(guestId: "guest", userId: ID) {
    cartDB[key(userId)] = mergeCarts(ensure(guestId), ensure(userId));
    cartDB[key(guestId)] = [];
  },
};
