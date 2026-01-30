import type { Slug } from "@/shared/types/primitives";
import { asSlug } from "@/shared/types/primitives";

export function slugifyCategory(value: string): Slug {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9а-щьюяґєії]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return asSlug(slug);
}
