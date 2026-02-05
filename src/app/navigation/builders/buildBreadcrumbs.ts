import { isNavRoute } from "@/shared/config/types";
import { NAV_PAGES } from "@/shared/config";

import type { Breadcrumb, BuildBreadcrumbsParams } from "@/app/navigation/types";

export function buildBreadcrumbs({
  pathname,
  params,
  product,
  category,
}: BuildBreadcrumbsParams): Breadcrumb {
  const items: Breadcrumb["items"] = [];

  items.push({ label: NAV_PAGES["/"], href: "/" });

  if (isNavRoute(pathname) && pathname !== "/") {
    items.push({ label: NAV_PAGES[pathname], isActive: true });
    return { items };
  }

  if (pathname.startsWith("/catalog")) {
    items.push({
      label: NAV_PAGES["/catalog"],
      href: "/catalog",
      isActive: pathname === "/catalog",
    });
  }

  if (category) {
    items.push({
      label: category.name,
      href: `/catalog/${category.slug}`,
      isActive: pathname === `/catalog/${category.slug}`,
    });
  }

  if (product) {
    items.push({ label: product.name, isActive: true });
  }

  if (pathname.startsWith("/page") && params?.slug) {
    items.push({
      label: params.slug.replace(/-/g, " "),
      isActive: true,
    });
  }

  return { items };
}
