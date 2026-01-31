import type { ID, Slug } from "@/shared/types/primitives";

export type CategoryDTO = {
  id: ID;
  name: string;
  slug: Slug;
  parentId: ID | null;
  isActive: boolean;
  order: number;
};
