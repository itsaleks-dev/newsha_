import type { User } from "@/entities/user/types";
import { ensureAdmin } from "@/entities/user/guards";
import type { Product, ProductPreview } from "@/entities/product/types";

import { ALL_PRODUCTS } from "@/features/fakeBackend/product/data";
import { autoFillNeedsAndCondition } from "@/features/fakeBackend/product/domain";
import { productToPreview } from "@/features/fakeBackend/product/domain";
import { PRODUCTS_API_TEXT } from "@/features/fakeBackend/product/config";

import { wait } from "@/shared/lib/async";
import type { PaginationQuery, PaginatedResponse } from "@/shared/lib/pagination/types";
import type { ID, Slug } from "@/shared/types/primitives";
import { asID } from "@/shared/types/primitives";

function applyPagination<T>(items: readonly T[], query?: PaginationQuery): PaginatedResponse<T> {
  const page = query?.page && query.page > 0 ? query.page : 1;
  const limit = query?.limit && query.limit > 0 ? query.limit : 12;

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(page, totalPages);

  const start = (safePage - 1) * limit;
  const end = start + limit;

  return {
    data: items.slice(start, end),
    meta: {
      page: safePage,
      limit,
      total,
      totalPages,
      hasNext: safePage < totalPages,
      hasPrev: safePage > 1,
    },
  };
}

let products: readonly Product[] = ALL_PRODUCTS.map(autoFillNeedsAndCondition);

export const productsApi = {
  async getProducts(pagination?: PaginationQuery): Promise<PaginatedResponse<ProductPreview>> {
    await wait();

    const active = products.filter((p) => p.isActive);
    const result = applyPagination(active, pagination);

    return {
      data: result.data.map(productToPreview),
      meta: result.meta,
    };
  },

  async getAllProducts(): Promise<readonly Product[]> {
    await wait();
    return products;
  },

  async searchProducts(query: string, limit = 10): Promise<ProductPreview[]> {
    await wait();

    const q = query.trim().toLowerCase();
    if (!q) return [];

    return products
      .filter((p) => {
        if (!p.isActive) return false;

        return [p.name, p.nameEn, p.nameUa, p.slug, ...(p.tags ?? [])]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(q));
      })
      .slice(0, limit)
      .map(productToPreview);
  },

  async getProductById(id: ID): Promise<Product | undefined> {
    await wait();
    return products.find((p) => p.id === id);
  },

  async getProductBySlug(slug: Slug): Promise<Product | undefined> {
    await wait();
    return products.find((p) => p.slug === slug);
  },

  async createProduct(data: Omit<Product, "id">, admin: User): Promise<Product> {
    await wait();
    ensureAdmin(admin);

    const product = autoFillNeedsAndCondition({
      ...data,
      id: asID(`p-${Date.now()}`),
    });

    products = [...products, product];
    return product;
  },

  async updateProduct(id: ID, patch: Partial<Omit<Product, "id">>, admin: User): Promise<Product> {
    await wait();
    ensureAdmin(admin);

    const product = products.find((p) => p.id === id);
    if (!product) {
      throw new Error(PRODUCTS_API_TEXT.PRODUCT_NOT_FOUND);
    }

    const updated = autoFillNeedsAndCondition({
      ...product,
      ...patch,
    });

    products = products.map((p) => (p.id === id ? updated : p));
    return updated;
  },

  async deleteProduct(id: ID, admin: User): Promise<boolean> {
    await wait();
    ensureAdmin(admin);

    const before = products.length;
    products = products.filter((p) => p.id !== id);

    return products.length < before;
  },
};

export function resetProducts(data: Product[] = []): void {
  products = data.map(autoFillNeedsAndCondition);
}
