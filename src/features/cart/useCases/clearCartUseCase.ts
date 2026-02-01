import type { CartRow } from "@/entities/cart/types";
import type { ICartRepository } from "@/features/cart/repositories";

export async function clearCartUseCase(repository: ICartRepository): Promise<readonly CartRow[]> {
  return repository.clearCart();
}
