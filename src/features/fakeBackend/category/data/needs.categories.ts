import type { CategoryDTO } from "@/features/fakeBackend/category/types";
import { asID, asSlug } from "@/shared/types/primitives";

export const NEEDS_CATEGORIES: CategoryDTO[] = [
  {
    id: asID("needs-root"),
    name: "Потреби волосся",
    slug: asSlug("needs"),
    isActive: true,
    parentId: null,
    order: 40,
  },
  {
    id: asID("needs-basic"),
    name: "Базові потреби",
    slug: asSlug("basic-needs"),
    isActive: true,
    parentId: asID("needs-root"),
    order: 41,
  },
  {
    id: asID("need-hydration"),
    name: "Зволоження",
    slug: asSlug("hydration"),
    isActive: true,
    parentId: asID("needs-basic"),
    order: 42,
  },
  {
    id: asID("need-nutrition"),
    name: "Живлення",
    slug: asSlug("nutrition"),
    isActive: true,
    parentId: asID("needs-basic"),
    order: 43,
  },
  {
    id: asID("need-repair"),
    name: "Відновлення",
    slug: asSlug("repair"),
    isActive: true,
    parentId: asID("needs-basic"),
    order: 44,
  },
  {
    id: asID("need-shine"),
    name: "Блиск волосся",
    slug: asSlug("shine"),
    isActive: true,
    parentId: asID("needs-basic"),
    order: 45,
  },
  {
    id: asID("need-smoothness"),
    name: "Гладкість волосся",
    slug: asSlug("smoothness"),
    isActive: true,
    parentId: asID("needs-basic"),
    order: 46,
  },
];
