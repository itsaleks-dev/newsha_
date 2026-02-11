import type { CartRow } from "@/entities/cart/types";

import type { RemoveFromCartDTO } from "@/features/cart/dto";
import type { ICartRepository } from "@/features/cart/repositories";

export async function removeFromCartUseCase(
  repository: ICartRepository,
  payload: RemoveFromCartDTO,
): Promise<readonly CartRow[]> {
  if (!payload.productId || payload.volume === undefined) {
    return repository.getCart();
  }

  return repository.removeFromCart(payload);
}
