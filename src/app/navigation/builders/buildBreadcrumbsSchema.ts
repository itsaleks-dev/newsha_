import type { Breadcrumb } from "@/app/navigation/types";

export function buildBreadcrumbsSchema(breadcrumbs: Breadcrumb, origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.items
      .filter((i): i is Required<typeof i> => Boolean(i.href))
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${origin}${item.href}`,
      })),
  };
}
