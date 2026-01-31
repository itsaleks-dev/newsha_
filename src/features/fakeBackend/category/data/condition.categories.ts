import type { CategoryDTO } from "@/features/fakeBackend/category/types";
import { asID, asSlug } from "@/shared/types/primitives";

export const CONDITION_CATEGORIES: CategoryDTO[] = [
  {
    id: asID("condition-root"),
    name: "Стан волосся",
    slug: asSlug("condition"),
    isActive: true,
    parentId: null,
    order: 60,
  },
  {
    id: asID("scalp"),
    name: "Шкіра голови",
    slug: asSlug("scalp"),
    isActive: true,
    parentId: asID("condition-root"),
    order: 61,
  },
  {
    id: asID("scalp-oily"),
    name: "Жирна шкіра голови",
    slug: asSlug("oily-scalp"),
    isActive: true,
    parentId: asID("scalp"),
    order: 62,
  },
  {
    id: asID("scalp-dry"),
    name: "Суха шкіра голови",
    slug: asSlug("dry-scalp"),
    isActive: true,
    parentId: asID("scalp"),
    order: 63,
  },
  {
    id: asID("scalp-sensitive"),
    name: "Чутлива шкіра голови",
    slug: asSlug("sensitive-scalp"),
    isActive: true,
    parentId: asID("scalp"),
    order: 64,
  },
  {
    id: asID("scalp-dandruff"),
    name: "Лупа",
    slug: asSlug("dandruff"),
    isActive: true,
    parentId: asID("scalp"),
    order: 65,
  },
];
