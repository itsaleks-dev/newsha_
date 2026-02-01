import type { CartRow } from "@/entities/cart/types";
import type { ICartRepository } from "@/features/cart/repositories";

export async function loadCartUseCase(repository: ICartRepository): Promise<readonly CartRow[]> {
  return repository.getCart();
}
