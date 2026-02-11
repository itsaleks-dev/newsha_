import type { CartItem } from "@/entities/cart/types";
import { mergeCarts } from "@/entities/cart/domain";
import { mapApiCartToStore, mapStoreCartToApi } from "@/entities/cart/infrastructure";
import { ensureLogged } from "@/entities/user/guards";
import { USER_ROLES } from "@/entities/user/types";

import { productsApi } from "@/features/fakeBackend/product/api";
import { PRODUCTS_API_TEXT } from "@/features/fakeBackend/product/config";
import { USERS_API_TEXT } from "@/features/fakeBackend/user/config";
import type { ApiState } from "@/features/fakeBackend/user/core";
import { clone } from "@/features/fakeBackend/user/core";

import { wait } from "@/shared/lib/async";
import type { ID } from "@/shared/types";
import { asQuantity, calcSubtotal } from "@/shared/types";

export function createCartApi(state: ApiState) {
  return {
    async getCart(): Promise<readonly CartItem[]> {
      await wait();
      return clone(state.getCtx().cart);
    },

    async addToCart(payload: CartItem): Promise<readonly CartItem[]> {
      await wait();
      ensureLogged(state.getCtx().user);

      const product = await productsApi.getProductById(payload.id);
      if (!product) {
        throw new Error(PRODUCTS_API_TEXT.PRODUCT_NOT_FOUND);
      }

      const cart = state.getCtx().cart;

      const existing = cart.find(
        (i) => i.id === payload.id && i.variant.value === payload.variant.value,
      );

      const updated = !existing
        ? [
            ...cart,
            {
              ...payload,
              subtotal: calcSubtotal(payload.price, payload.qty),
            },
          ]
        : cart
            .map((i) => {
              if (i !== existing) return i;

              const nextQty = asQuantity((i.qty as number) + (payload.qty as number));

              return {
                ...i,
                qty: nextQty,
                subtotal: calcSubtotal(i.price, nextQty),
              };
            })
            .filter((i) => (i.qty as number) > 0);

      state.setCart(updated);
      return clone(updated);
    },

    async removeFromCart(payload: { id: ID; variantValue?: number }) {
      await wait();
      ensureLogged(state.getCtx().user);

      const updated = state
        .getCtx()
        .cart.filter((i) => !(i.id === payload.id && i.variant.value === payload.variantValue));

      state.setCart(updated);
      return clone(updated);
    },

    async clearCart() {
      await wait();
      ensureLogged(state.getCtx().user);

      state.setCart([]);
      return [];
    },

    async syncCart(local: readonly CartItem[]) {
      await wait();

      if (state.getCtx().user.role === USER_ROLES.GUEST) {
        throw new Error(USERS_API_TEXT.GUEST_SYNC_FORBIDDEN);
      }

      const merged = mergeCarts(mapApiCartToStore(local), mapApiCartToStore(state.getCtx().cart));

      const apiCart = mapStoreCartToApi(merged);
      state.setCart(apiCart);

      return clone(apiCart);
    },
  };
}
