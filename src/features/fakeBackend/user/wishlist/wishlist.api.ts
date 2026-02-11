import { ensureLogged } from "@/entities/user/guards";

import { productsApi } from "@/features/fakeBackend/product/api";
import { PRODUCTS_API_TEXT } from "@/features/fakeBackend/product/config";
import type { ApiState } from "@/features/fakeBackend/user/core";
import { clone } from "@/features/fakeBackend/user/core";

import { wait } from "@/shared/lib/async";
import type { ID } from "@/shared/types";

export function createWishlistApi(state: ApiState) {
  return {
    async getWishlist(): Promise<readonly ID[]> {
      await wait();
      ensureLogged(state.getCtx().user);

      return clone(state.getCtx().wishlist);
    },

    async addToWishlist(productId: ID): Promise<readonly ID[]> {
      await wait();
      ensureLogged(state.getCtx().user);

      const product = await productsApi.getProductById(productId);
      if (!product) {
        throw new Error(PRODUCTS_API_TEXT.PRODUCT_NOT_FOUND);
      }

      const wishlist = state.getCtx().wishlist;

      if (wishlist.includes(productId)) {
        return clone(wishlist);
      }

      const updated = [...wishlist, productId];
      state.setWishlist(updated);

      return clone(updated);
    },

    async removeFromWishlist(productId: ID): Promise<readonly ID[]> {
      await wait();
      ensureLogged(state.getCtx().user);

      const updated = state.getCtx().wishlist.filter((id) => id !== productId);
      state.setWishlist(updated);

      return clone(updated);
    },
  };
}
