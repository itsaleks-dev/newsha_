import type { Slug } from "@/entities/primitives";
import { asSlug } from "@/entities/primitives";

export function slugifyCategory(value: string): Slug {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9а-щьюяґєії]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return asSlug(slug);
}
