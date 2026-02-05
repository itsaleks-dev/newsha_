import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

import type { BreadcrumbCategory, BreadcrumbProduct } from "@/app/navigation/types";

import { buildBreadcrumbs } from "@/app/navigation/builders";
import { buildBreadcrumbsSchema } from "@/app/navigation/builders";

type Params = {
  product?: BreadcrumbProduct;
  category?: BreadcrumbCategory;
};

export function useBreadcrumbs({ product, category }: Params = {}) {
  const location = useLocation();
  const params = useParams();

  const breadcrumbs = useMemo(() => {
    return buildBreadcrumbs({
      pathname: location.pathname,
      params,
      ...(product && { product }),
      ...(category && { category }),
    });
  }, [location.pathname, params, product, category]);

  const schema = useMemo(
    () => buildBreadcrumbsSchema(breadcrumbs, window.location.origin),
    [breadcrumbs],
  );

  return { breadcrumbs, schema };
}
