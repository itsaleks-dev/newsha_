import type { Category } from "@/entities/category/types";
import { slugifyCategory, ensureUniqueCategorySlug } from "@/entities/category/domain";
import type { User } from "@/entities/user/types";
import { ensureAdmin } from "@/entities/user/guards";

import { CATEGORIES_API_TEXT } from "@/features/fakeBackend/category/config";
import {
  MAIN_CATEGORIES,
  NEEDS_CATEGORIES,
  CONDITION_CATEGORIES,
} from "@/features/fakeBackend/category/data";

import type { ID } from "@/shared/types";
import { wait } from "@/shared/lib/async";

let categories: Category[] = [...MAIN_CATEGORIES, ...NEEDS_CATEGORIES, ...CONDITION_CATEGORIES];

export function __resetCategories(data?: Category[]) {
  categories = data ? [...data] : [];
}

export const categoriesApi = {
  async getCategories() {
    await wait();
    return categories.filter((c) => c.isActive).sort((a, b) => a.order - b.order);
  },

  async getAllCategories(admin: User) {
    await wait();
    ensureAdmin(admin);

    return [...categories].sort((a, b) => a.order - b.order);
  },

  async getCategoryById(id: ID) {
    await wait();
    return categories.find((c) => c.id === id);
  },

  async createCategory(data: Omit<Category, "id" | "slug"> & { slug?: string }, admin: User) {
    await wait();
    ensureAdmin(admin);

    const id = `cat-${Date.now()}` as ID;
    const slug = slugifyCategory(data.slug ?? data.name);

    ensureUniqueCategorySlug(slug, categories);

    const category: Category = {
      ...data,
      id,
      slug,
      parentId: data.parentId ?? null,
    };

    categories.push(category);
    return category;
  },

  async updateCategory(id: ID, patch: Partial<Omit<Category, "id">>, admin: User) {
    await wait();
    ensureAdmin(admin);

    const category = categories.find((c) => c.id === id);
    if (!category) {
      throw new Error(CATEGORIES_API_TEXT.CATEGORY_NOT_FOUND);
    }

    if (patch.slug || patch.name) {
      const newSlug = slugifyCategory(patch.slug ?? patch.name!);
      if (newSlug !== category.slug) {
        ensureUniqueCategorySlug(newSlug, categories, id);
        patch.slug = newSlug;
      }
    }

    Object.assign(category, patch);
    return category;
  },

  async deleteCategory(id: ID, admin: User) {
    await wait();
    ensureAdmin(admin);

    const category = categories.find((c) => c.id === id);
    if (!category) return false;

    category.isActive = false;
    return true;
  },
};
