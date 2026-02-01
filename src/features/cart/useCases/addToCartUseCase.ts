import type { CartRow } from "@/entities/cart/types";
import type { AddToCartDTO } from "@/features/cart/dto";
import type { ICartRepository } from "@/features/cart/repositories";

export async function addToCartUseCase(
  repository: ICartRepository,
  payload: AddToCartDTO,
): Promise<readonly CartRow[]> {
  if (
    !payload.productId ||
    payload.volume === undefined ||
    !Number.isInteger(payload.qty) ||
    payload.qty <= 0
  ) {
    return repository.getCart();
  }

  return repository.addToCart(payload);
}
