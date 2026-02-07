import type { UserContext } from "@/entities/user/types";
import type { CartItem } from "@/entities/cart/types";

import type { ID } from "@/shared/types/primitives";

export type StoreUser = UserContext & {
  cart: CartItem[];
  wishlist: ID[];
};

export const toStoreUser = (userContext: UserContext): StoreUser => ({
  ...userContext,
  cart: [...userContext.cart],
  wishlist: [...userContext.wishlist],
});
