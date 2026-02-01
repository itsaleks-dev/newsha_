import type { CartRow } from "@/entities/cart/types";

import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";

export interface ICartRepository {
  getCart(): Promise<readonly CartRow[]>;
  addToCart(payload: AddToCartDTO): Promise<readonly CartRow[]>;
  removeFromCart(payload: RemoveFromCartDTO): Promise<readonly CartRow[]>;
  clearCart(): Promise<readonly CartRow[]>;
}
