import { useAppDispatch } from "@/app/store/hooks";

import { addToCart, removeFromCart, clearCart } from "@/features/cart/model";
import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";

export function useCartActions() {
  const dispatch = useAppDispatch();

  return {
    add: (payload: AddToCartDTO) => dispatch(addToCart(payload)).unwrap(),
    remove: (payload: RemoveFromCartDTO) => dispatch(removeFromCart(payload)).unwrap(),
    clear: () => dispatch(clearCart()).unwrap(),
  };
}
