import { CartApiAdapter } from "@/features/fakeBackend/user/cart/cartApiAdapter";
import {
  loadCartUseCase,
  addToCartUseCase,
  removeFromCartUseCase,
  clearCartUseCase,
} from "@/features/cart/useCases";
import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";

export const createCartService = () => {
  const repository = new CartApiAdapter();

  return {
    fetchCart: () => loadCartUseCase(repository),
    addToCart: (payload: AddToCartDTO) => addToCartUseCase(repository, payload),
    removeFromCart: (payload: RemoveFromCartDTO) => removeFromCartUseCase(repository, payload),
    clearCart: () => clearCartUseCase(repository),
  };
};
