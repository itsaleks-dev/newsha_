import type { CartRow, CartOwnerId } from "@/entities/cart/types";

import { mockCartApi } from "@/app/mocks/cart/api";

import { getUsersApi } from "@/features/fakeBackend/user/api";
import { productsApi } from "@/features/fakeBackend/product/api";
import type { AddToCartDTO, RemoveFromCartDTO } from "@/features/cart/dto";
import type { ICartRepository } from "@/features/cart/repositories";

import { asQuantity } from "@/shared/types";

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

    const volume =
      payload.volume !== null
        ? product.volumes?.find((v) => v.value === payload.volume)
        : product.volumes?.[0];

    if (!volume) return this.getCart();

    const cart = await mockCartApi.get(ownerId);
    const existing = cart.find(
      (r) => r.productId === payload.productId && r.volumeValue === volume.value,
    );

    const currentQty = existing ? (existing.qty as number) : 0;
    const nextQty = currentQty + payload.qty;

    return mockCartApi.add(ownerId, {
      productId: payload.productId,
      volumeValue: volume.value,
      qty: asQuantity(nextQty),
      price: volume.price,
      ...(volume.oldPrice !== undefined && { oldPrice: volume.oldPrice }),
    });
  }

  async removeFromCart(payload: RemoveFromCartDTO): Promise<readonly CartRow[]> {
    const ownerId = await this.getCartOwnerId();
    const cart = await mockCartApi.get(ownerId);

    const existing = cart.find(
      (r) => r.productId === payload.productId && r.volumeValue === payload.volume,
    );

    if (!existing) return cart;

    const nextQty = (existing.qty as number) - 1;

    if (nextQty <= 0) {
      return mockCartApi.remove(ownerId, payload.productId, payload.volume!);
    }

    return mockCartApi.add(ownerId, {
      ...existing,
      qty: asQuantity(nextQty),
    });
  }

  async removeLine(payload: RemoveFromCartDTO): Promise<readonly CartRow[]> {
    const ownerId = await this.getCartOwnerId();
    return mockCartApi.removeLine(ownerId, payload.productId, payload.volume!);
  }

  async clearCart(): Promise<readonly CartRow[]> {
    const ownerId = await this.getCartOwnerId();
    return mockCartApi.clear(ownerId);
  }
}
