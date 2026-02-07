import { useAppDispatch } from "@/app/store/hooks";

import { addToCart, removeFromCart, removeLineFromCart, clearCart } from "@/features/cart/model";
import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";

export function useCartActions() {
  const dispatch = useAppDispatch();

  return {
    add: (payload: AddToCartDTO) => dispatch(addToCart(payload)).unwrap(),
    removeOne: (payload: RemoveFromCartDTO) => dispatch(removeFromCart(payload)).unwrap(),
    removeLine: (payload: RemoveFromCartDTO) => dispatch(removeLineFromCart(payload)).unwrap(),
    clear: () => dispatch(clearCart()).unwrap(),
  };
}
