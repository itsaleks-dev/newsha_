import type { RootState } from "@/app/store/rootReducer";

import type { ID } from "@/shared/types/primitives";

export const selectWishlist = (state: RootState): readonly ID[] => state.wishlist.items;

export const selectIsInWishlist =
  (productId: ID) =>
  (state: RootState): boolean =>
    state.wishlist.items.includes(productId);
