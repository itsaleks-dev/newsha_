import type { ID, Slug } from "@/entities/primitives";

export type Category = {
  id: ID;
  name: string;
  slug: Slug;
  description?: string;
  image?: string;
  parentId: ID | null;
  isActive: boolean;
  order: number;
};

export interface CategoryNode extends Category {
  children: readonly CategoryNode[];
}
