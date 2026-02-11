import type { Category } from "@/entities/category/types";
import { slugifyCategory } from "@/entities/category/domain";

import { asID, asSlug } from "@/shared/types";

let idCounter = 1;

export function mockCategory(overrides: Partial<Category> = {}): Category {
  const rawId = `cat-${idCounter++}`;
  const name = overrides.name ?? `Category ${rawId}`;

  return {
    id: overrides.id ?? asID(rawId),
    name,
    slug: overrides.slug ?? asSlug(slugifyCategory(name)),
    isActive: overrides.isActive ?? true,
    order: overrides.order ?? idCounter,
    parentId: overrides.parentId ?? null,

    ...(overrides.image !== undefined && { image: overrides.image }),
    ...(overrides.description !== undefined && { description: overrides.description }),
  };
}
