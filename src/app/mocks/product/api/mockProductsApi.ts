import type { Product } from "@/entities/product/types";
import type { CatalogCategorySlug } from "@/entities/category/config";

import { productsDB } from "@/app/mocks/product/db";
import { mockProduct } from "@/app/mocks/product/factories";

import type { ID } from "@/shared/types";

const clone = <T>(v: T): T => structuredClone(v);

export const mockProductsApi = {
  create(category: CatalogCategorySlug, overrides?: Partial<Product>): Product {
    const product = mockProduct(category, overrides);
    productsDB[product.id] = product;
    return clone(product);
  },

  getById(id: ID): Product | null {
    return clone(productsDB[id] ?? null);
  },

  getAll(): Product[] {
    return clone(Object.values(productsDB));
  },

  clear(): void {
    Object.keys(productsDB).forEach((key) => {
      delete productsDB[key as ID];
    });
  },
};
