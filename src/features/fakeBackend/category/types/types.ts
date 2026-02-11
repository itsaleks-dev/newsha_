import type { ID, Slug } from "@/shared/types";

export type CategoryDTO = {
  id: ID;
  name: string;
  slug: Slug;
  image?: string;
  parentId: ID | null;
  isActive: boolean;
  order: number;
};
