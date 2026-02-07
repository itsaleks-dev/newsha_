import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";
import { CartApiAdapter } from "@/features/fakeBackend/user/cart/cartApiAdapter";
import {
  loadCartUseCase,
  addToCartUseCase,
  removeFromCartUseCase,
  clearCartUseCase,
} from "@/features/cart/useCases";

export function createCartService() {
  const repository = new CartApiAdapter();

  return {
    fetchCart: () => loadCartUseCase(repository),

    addToCart: (payload: AddToCartDTO) => addToCartUseCase(repository, payload),

    removeFromCart: (payload: RemoveFromCartDTO) => removeFromCartUseCase(repository, payload),

    removeLine: (payload: RemoveFromCartDTO) => repository.removeLine(payload),

    clearCart: () => clearCartUseCase(repository),
  };
}
