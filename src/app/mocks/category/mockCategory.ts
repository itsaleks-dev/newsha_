import type { Category } from "@/entities/category/types";
import { asID, asSlug } from "@/shared/types/primitives";

let idCounter = 1;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function mockCategory(overrides: Partial<Category> = {}): Category {
  const rawId = `cat-${idCounter++}`;
  const name = overrides.name ?? `Category ${rawId}`;

  return {
    id: overrides.id ?? asID(rawId),
    name,
    slug: overrides.slug ?? asSlug(slugify(name)),
    isActive: overrides.isActive ?? true,
    order: overrides.order ?? idCounter,
    parentId: overrides.parentId ?? null,

    ...(overrides.image !== undefined && { image: overrides.image }),
    ...(overrides.description !== undefined && { description: overrides.description }),
  };
}
