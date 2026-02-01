import type { CartRow, CartOwnerId } from "@/entities/cart/types";

import { mockCartApi } from "@/app/mocks/cart/api";

import { getUsersApi } from "@/features/fakeBackend/user/api";
import { productsApi } from "@/features/fakeBackend/product/api";
import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";
import type { ICartRepository } from "@/features/cart/repositories";

import { asQuantity } from "@/shared/types/primitives";

export class CartApiAdapter implements ICartRepository {
  private async getCartOwnerId(): Promise<CartOwnerId> {
    const user = await getUsersApi().getCurrentUser();
    return user.role === "guest" ? "guest" : user.id;
  }

  async getCart(): Promise<readonly CartRow[]> {
    const ownerId = await this.getCartOwnerId();
    return mockCartApi.get(ownerId);
  }

  async addToCart(payload: AddToCartDTO): Promise<readonly CartRow[]> {
    const ownerId = await this.getCartOwnerId();

    const product = await productsApi.getProductById(payload.productId);
    if (!product) return this.getCart();

    if (payload.volume === null) return this.getCart();

    const volume = product.volumes?.find((v) => v.value === payload.volume);
    if (!volume) return this.getCart();

    const item: CartRow = {
      productId: payload.productId,
      volumeValue: payload.volume,
      qty: asQuantity(payload.qty),
      price: volume.price,
      ...(volume.oldPrice !== undefined && { oldPrice: volume.oldPrice }),
    };

    return mockCartApi.add(ownerId, item);
  }

  async removeFromCart(payload: RemoveFromCartDTO): Promise<readonly CartRow[]> {
    const ownerId = await this.getCartOwnerId();

    if (payload.volume === null) {
      return this.getCart();
    }

    return mockCartApi.remove(ownerId, payload.productId, payload.volume);
  }

  async clearCart(): Promise<readonly CartRow[]> {
    const ownerId = await this.getCartOwnerId();
    return mockCartApi.clear(ownerId);
  }
}
