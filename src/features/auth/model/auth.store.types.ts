import type { UserContext } from "@/entities/user/types";
import type { CartItem } from "@/entities/cart/types";
import type { ID } from "@/shared/types/primitives";

export type StoreUser = UserContext & {
  cart: CartItem[];
  wishlist: ID[];
};

export const toStoreUser = (ctx: UserContext): StoreUser => ({
  ...ctx,
  cart: [...ctx.cart],
  wishlist: [...ctx.wishlist],
});
